import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import config from "../config/config.js";

export async function register(req, res) {
  try {
    const { username, email, password } = req.body;

    // ✅ FIXED
    const isAlreadyRegistered = await userModel.findOne({
      $or: [{ username }, { email }]
    });

    if (isAlreadyRegistered) {
      return res.status(409).json({
        message: "username or email already exists"
      });
    }

    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword
    });

    const accesstoken = jwt.sign(
      { id: user._id },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const refreshtoken = jwt.sign(
      { id: user._id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      message: "user registered successfully",
      user: {
        username: user.username,
        email: user.email
      },
      accesstoken
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function getMe(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "token not found"
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(token, config.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        message: "Invalid token"
      });
    }

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      message: "user fetched successfully",
      user: {
        username: user.username,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export async function refreshtoken(req, res) {
  try {
    const refreshToken = req.cookies.refreshtoken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "refresh token not found"
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(refreshToken, config.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({
        message: "Invalid refresh token"
      });
    }

    const accesstoken = jwt.sign(
      { id: decoded.id },
      config.JWT_SECRET,
      { expiresIn: "15m" }
    );

    const newRefreshtoken = jwt.sign(
      { id: decoded.id },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ FIXED
    res.cookie("refreshtoken", newRefreshtoken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      message: "access token refreshed successfully",
      accesstoken
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
}