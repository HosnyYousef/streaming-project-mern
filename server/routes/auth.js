import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router()

// CREATE A USER

router.post("/signup", signup)

// because we are sending out information, email and password

// SIGN IN

// router.post("/signin", ) commented out temporarily 

// GOOGLE AUTHENTICATION

// router.post("/google", ) commented out temporarily

export default router;