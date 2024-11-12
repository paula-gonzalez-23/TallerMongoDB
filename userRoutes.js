import { Router } from "express";
import {
    crearUsuariosIniciales,
    obtenerTodosUsuarios,
    obtenerUsuarioAnaLopez,
    obtenerUsuariosMayores30,
    actualizarEdadJuanPerez,
    agregarCampoActivoUsuariosMayores30,
    eliminarUsuarioLuisTorres,
    eliminarUsuariosMenores30
} from "../controller/userController.js";

const router = Router();

router.post('/usuarios/crear-inicial', crearUsuariosIniciales); // Crea los usuarios iniciales
router.get('/usuarios', obtenerTodosUsuarios); // Obtiene todos los usuarios
router.get('/usuarios/ana-lopez', obtenerUsuarioAnaLopez); // Encuentra el usuario Ana López
router.get('/usuarios/mayores-30', obtenerUsuariosMayores30); // Encuentra usuarios con edad >= 30
router.put('/usuarios/juan-perez/edad', actualizarEdadJuanPerez); // Actualiza la edad de Juan Pérez a 31
router.put('/usuarios/mayores-30/activo', agregarCampoActivoUsuariosMayores30); // Agrega campo activo a usuarios mayores de 30
router.delete('/usuarios/luis-torres', eliminarUsuarioLuisTorres); // Elimina el usuario Luis Torres
router.delete('/usuarios/menores-30', eliminarUsuariosMenores30); // Elimina usuarios menores de 30

export default router;
