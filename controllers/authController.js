import bcrypt from "bcrypt";
import User from "../models/userModels.js";

export const authController = async (req, res) => {
  try {
    const { name, lastName, email, password, location } = req.body;

    const newUser = new User({
      name: name,
      lastName: lastName,
      email: email,
      password: bcrypt.hashSync(password, 10),
      location: location,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", User: newUser });
  } catch (e) {
    console.error();
    res.status(500).json({ error: e.message, Url: "/api/v1" + req.url });
  }
  return;
};
