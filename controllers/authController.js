import bcrypt from "bcrypt";
import User from "../models/userModels.js";
import { response } from "express";

export const authController = async (req, res, next) => {
  const { name, lastName, email, password, location } = req.body;

  if (!name) {
    next("Name is required in request body");
  }
  if (!email) {
    next("Email is required in request body");
  }
  if (!password) {
    next("Password is required in request body");
  }

  if (password.length < 6) {
    next("Password must be at least 6 characters long");
  }
  const newUser = new User({
    name: name,
    lastName: lastName,
    email: email,
    password: bcrypt.hashSync(password, 10),
    location: location,
  });

  const userExist = await User.findOne({ email: email });
  // if (userExist) {
  //   next("User already exists.");
  //   //res.status(err.status || 500).json({ message: "User already exists." });
  //   //return;
  // }

  await newUser.save();
  res.status(201).json({ message: "User created successfully", User: newUser });

  return;
};
