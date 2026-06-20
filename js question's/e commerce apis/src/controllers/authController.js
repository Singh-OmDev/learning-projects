import User from "../models/User.js";
 import bcrypt from "bcryptjs";
 import {
  generateAccessToken,
  generateRefreshToken
} from "../utils/generateTokens.js";

  import jwt from "jsonwebtoken";


  export const register = async (req, res)=> {

try {
         const {name, email , password } = req.body;

         const existingUser = await User.findOne ({email});
          if (existingUser){
             return res.status(400).json({message:"user already exits"});


          }

          //hash password 
           const hashedPassword = await  bcrypt.hash (password, 10);
           const user  = await User.create ({
             name,
              email,
               password: hashedPassword,

           });

           res.status (201).json({message:"user registered successfully", user});




}
 catch (error){
       console.log (error)
        res.status (500).json({message:"internal server error"});

 }
     
  }



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Generate JWT
    const accessToken =
  generateAccessToken(user);

const refreshToken =
  generateRefreshToken(user);

res.json({
  message: "Login successful",
  accessToken,
  refreshToken,
});

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const profile = async (req, res) => {
  try {

    const user = await User.findById(
      req.user.id
    ).select("-password");

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }
};



export const getAllUsers = async (req, res) => {

  try {

    const users = await User.find()
      .select("-password");

    res.status(200).json(users);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

};

 export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        message: "No refresh token provided",
      });
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    );

    const accessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Invalid refresh token",
    });
  }
};