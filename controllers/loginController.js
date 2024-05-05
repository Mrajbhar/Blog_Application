import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import express from "express";
import { comarePassword, hashPassword } from "../helpers/authHelper.js";
const router = express.Router();


export const registerController = async (req, res) => {
  try {
    const { name, email, password} = req.body;

    //validetion

    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "email is Required" });
    }
    if (!password) {
      return res.send({ message: "password is Required" });
    }
    // if (!phone) {
    //   return res.send({ message: "phone is Required" });
    // }
    // if (!address) {
    //   return res.send({ message: "address is Required" });
    // }
    
    //check user
    const existinguser = await userModel.findOne({ email });
    //Existing user
    if (existinguser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);

    //save

    const user = await new userModel({
      name,
      email,
      // phone,
      // address,
      password: hashedPassword,
      // answer
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide email and password" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error in Login" });
  }
};

export const testController = (req, res) => {
  res.send('Protected Router');
};

export default router;
