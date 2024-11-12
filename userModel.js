import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    age: Number,
    email: String
})

export const userModel = new mongoose.model('Users', userSchema)