import { productModel } from "../model/productModel.js";

// 1. Insertar productos en la colección "productos"
export const insertarProductos = async (peticion, respuesta) => {
    try {
        const productos = [
            { nombre: "Laptop", precio: 1200000, categoria: "Electrónica" },
            { nombre: "Televisor", precio: 800000, categoria: "Electrónica" },
            { nombre: "Sofá", precio: 450000, categoria: "Hogar" },
            { nombre: "Camiseta", precio: 25000, categoria: "Ropa" },
            { nombre: "Microondas", precio: 150000, categoria: "Electrónica" }
        ];
        await productModel.insertMany(productos);
        let todosProductos = await productModel.find();
        respuesta.status(200).render("productos", { productos: todosProductos });
    } catch (error) {
        console.log(error);
    }
};

//Encuentra todos los productos con precio mayor a $100
export const obtenerProductosPrecioMayor100 = async (peticion, respuesta) => {
    try {
        let productos = await productModel.find({ precio: { $gt: 100 } });
        respuesta.status(200).render("productos", { productos });
    } catch (error) {
        console.log(error);
    }
};

//Ordena los productos por precio de manera descendente
export const obtenerProductosOrdenadosPorPrecioDesc = async (peticion, respuesta) => {
    try {
        let productos = await productModel.find().sort({ precio: -1 });
        respuesta.status(200).render("productos", { productos });
    } catch (error) {
        console.log(error);
    }
};

//Añade un campo en stock con valor true a todos los productos
export const agregarCampoEnStock = async (peticion, respuesta) => {
    try {
        await productModel.updateMany({}, { $set: { enStock: true } });
        let productos = await productModel.find();
        respuesta.status(200).render("productos", { productos });
    } catch (error) {
        console.log(error);
    }
};

//Cambia el valor de en stock a false para los productos cuyo precio sea mayor a $500
export const actualizarEnStockProductosMayor500 = async (peticion, respuesta) => {
    try {
        await productModel.updateMany({ precio: { $gt: 500 } }, { $set: { enStock: false } });
        let productos = await productModel.find();
        respuesta.status(200).render("productos", { productos });
    } catch (error) {
        console.log(error);
    }
};

//Elimina todos los productos cuyo precio sea menor a $50
export const eliminarProductosMenores50 = async (peticion, respuesta) => {
    try {
        await productModel.deleteMany({ precio: { $lt: 50 } });
        let productos = await productModel.find();
        respuesta.status(200).render("productos", { productos });
    } catch (error) {
        console.log(error);
    }
};
