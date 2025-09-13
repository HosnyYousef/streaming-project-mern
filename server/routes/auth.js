import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router()

// CREATE A USER

router.post("/signup", signup)

// because we are sending out information, email and password

// SIGN IN
// testing a commit 

router.post("/signin", signin) 

// GOOGLE AUTHENTICATION

// router.post("/google", ) commented out temporarily

export default router;