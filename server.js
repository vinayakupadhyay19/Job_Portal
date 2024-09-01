import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import db from "./config/db.js";

//DOT Env Config
dotenv.config();

//mongodb connnection
db();

//rest opject
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello Job Portal, Vinayak is here..to learn Node.js</h1>");
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} for ${process.env.DEV_MODE} mode`.bgBlue
      .white
  );
});
