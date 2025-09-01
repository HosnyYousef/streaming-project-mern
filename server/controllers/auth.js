import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        // Store hash in your password DB
        const newUser = new User({...req.body, password: hash})

        await newUser.save()
        // we're going to save the password to mongoDB server
        // await is used because of the async operation
        res.stats(200).send("User has been created!")
    } catch (err) {
        //todo (we'll handle the error later)
    }
}