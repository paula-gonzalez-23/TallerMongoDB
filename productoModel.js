import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    name: String,
    price: Number,
    category: String
})

export const productoModel = new mongoose.model('Producto', productoSchema)