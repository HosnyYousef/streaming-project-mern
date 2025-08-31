import express from "express";
import { test } from "../controllers/user.js";

const router = express.Router()

router.get("/test", test)
// because we are going to fetch data

export default router;