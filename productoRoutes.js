import { Router } from "express";
import {
    insertarProductos,
    obtenerProductosPrecioMayor100,
    obtenerProductosOrdenadosPorPrecioDesc,
    agregarCampoEnStock,
    actualizarEnStockProductosMayor500,
    eliminarProductosMenores50
} from "../controller/productController.js";

const router = Router();

router.post('/productos/crear-inicial', insertarProductos); // Inserta productos iniciales
router.get('/productos/precio-mayor-100', obtenerProductosPrecioMayor100); // Obtiene productos con precio > 100
router.get('/productos/ordenados-desc', obtenerProductosOrdenadosPorPrecioDesc); // Ordena productos por precio descendente
router.put('/productos/agregar-en-stock', agregarCampoEnStock); // Añade el campo enStock: true a todos los productos
router.put('/productos/actualizar-en-stock-mayor-500', actualizarEnStockProductosMayor500); // Cambia enStock a false para productos con precio > 500
router.delete('/productos/eliminar-menores-50', eliminarProductosMenores50); // Elimina productos con precio < 50

export default router;
