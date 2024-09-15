import express from "express";
import { testConstroller } from "../controllers/testController.js";

//router object

const router = express.Router();

router.post("/test-post", testConstroller);

//export router
export default router;
