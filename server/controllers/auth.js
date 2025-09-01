import mongoose from "mongoose";
import User from "../models/User.js";

export const signup = async (req, res) => {
    console.log(req.body)

    // try{
    //     const newUser = new User(req.body)
    // }catch(err){
    //     //todo (we'll handle the error later)
    // }
}

// remember, user is requesting and server is responding with (req, res) 