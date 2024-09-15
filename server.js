import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import db from "./config/db.js";
import testRoute from "./routes/testRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import morgan from "morgan";

//DOT Env Config
dotenv.config();

//mongodb connnection
db();

//rest opject
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("API Running...");
});
app.use("/api/v1/test", testRoute);
app.use("/api/v1", authRoute);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} for ${process.env.DEV_MODE} mode`.bgBlue
      .white
  );
});
