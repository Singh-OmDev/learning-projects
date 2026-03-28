import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import config from "../config/config.js";
import sessionModel from "../models/session.model.js";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // ✅ basic validation
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const isAlreadyRegistered = await userModel.findOne({
      $or: [{ username }, { email }]
    });

    if (isAlreadyRegistered) {
      return res.status(409).json({
        message: "username or email already exists"
      });
    }

    // ⚠️ still SHA256 (ok for now, but use bcrypt later)
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword
    });

    // ✅ Create refresh token
    const refreshToken = jwt.sign(
      { id: user._id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Hash refresh token for DB
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // ✅ Store session
    const session = await sessionModel.create({
      userId: user._id,
      refreshTokenHash,
      ip: req.ip || "unknown",
      userAgent: req.headers["user-agent"] || "unknown"
    });

    // ✅ Access token with sessionId
    const accesstoken = jwt.sign(
      {
        id: user._id,
        sessionId: session._id
      },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );

    // ✅ Set cookie
    res.cookie("refreshtoken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // 🔥 better
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      message: "user registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      },
      accesstoken
    });

  } catch (error) {
    console.error("Register Error:", error); // 🔥 debug
    res.status(500).json({ message: "Server error" });
  }
}
export async function getMe(req, res) {
  res.send("getMe working");
}

export async function refreshtoken(req, res) {
  res.send("refresh token working");
}


 //logout functionality

export async function logout (req, res){
   const refreshToken  = req.cookies.refreshToken;
     if ( !refreshToken){

       return  res.status(400).json({
         message: "refresh token not found"
       })
     }
  const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex");

   const session = await sessionModel.findOne({

     refreshTokenHash,
      revoked: false

   })


   if (!session){
     return res.status(400).json({
       message: "invalid refresh token"
     })
   }

    session.revoked = true;
     await session.save();

     res.clearCookie ("refreshToken")
      res.status(200).json ({
         message:"logged out successfully"
      })

}