import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUrl = process.env.LOCAL;
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB Database: ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (err) {
    console.log(`MongoDB error : ${err.message}`.bgRed.white);
  }
};

export default connectDB;
