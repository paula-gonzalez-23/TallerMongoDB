import { userModel } from "../model/userModel.js";

// 1.Colección de usuarios con datos iniciales
export const crearUsuariosIniciales = async (peticion, respuesta) => {
    try {
        const usuariosIniciales = [
            { nombre: "Juan Pérez", edad: 30, correo: "juan.perez@urosario.com" },
            { nombre: "Ana López", edad: 25, correo: "ana.lopez@urosario.com" },
            { nombre: "Luis Torres", edad: 35, correo: "luis.torres@urosario.com" }
        ];
        await userModel.insertMany(usuariosIniciales);
        let usuarios = await userModel.find();
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};

//Encuentra todos los usuarios
export const obtenerTodosUsuarios = async (peticion, respuesta) => {
    try {
        let usuarios = await userModel.find();
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};

//Encuentra el usuario con nombre Ana López
export const obtenerUsuarioAnaLopez = async (peticion, respuesta) => {
    try {
        let usuario = await userModel.findOne({ nombre: "Ana López" });
        respuesta.status(200).render("index", { usuarios: [usuario] });
    } catch (error) {
        console.log(error);
    }
};

//Encuentra todos los usuarios mayores o iguales a 30 años
export const obtenerUsuariosMayores30 = async (peticion, respuesta) => {
    try {
        let usuarios = await userModel.find({ edad: { $gte: 30 } });
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};

//Cambia la edad de Juan Pérez a 31 años
export const actualizarEdadJuanPerez = async (peticion, respuesta) => {
    try {
        await userModel.updateOne({ nombre: "Juan Pérez" }, { $set: { edad: 31 } });
        let usuarios = await userModel.find();
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};

//Añade el campo activo: true a todos los usuarios con edad mayor o igual a 30 años
export const agregarCampoActivoUsuariosMayores30 = async (peticion, respuesta) => {
    try {
        await userModel.updateMany({ edad: { $gte: 30 } }, { $set: { activo: true } });
        let usuarios = await userModel.find();
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};

//Elimina el usuario Luis Torres
export const eliminarUsuarioLuisTorres = async (peticion, respuesta) => {
    try {
        await userModel.deleteOne({ nombre: "Luis Torres" });
        let usuarios = await userModel.find();
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};

//Elimina todos los usuarios menores de 30 años
export const eliminarUsuariosMenores30 = async (peticion, respuesta) => {
    try {
        await userModel.deleteMany({ edad: { $lt: 30 } });
        let usuarios = await userModel.find();
        respuesta.status(200).render("index", { usuarios });
    } catch (error) {
        console.log(error);
    }
};
