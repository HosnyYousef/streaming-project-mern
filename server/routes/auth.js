import express from "express";
import { } from "../controllers/auth.js";

const router = express.Router()

// CREATE A USER

router.post("/signup", signup)

// because we are sending out information, email and password

// SIGN IN

router.post("/signin", )

// GOOGLE AUTHENTICATION

router.post("/google", )

export default router;