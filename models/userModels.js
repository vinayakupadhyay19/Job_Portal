import mongoose from "mongoose";
import validator from "validator";

// schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 character long"],
    },
    location: {
      type: String,
      default: "Gurugram",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
