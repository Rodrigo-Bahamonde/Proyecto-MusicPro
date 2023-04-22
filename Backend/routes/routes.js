
import { Router } from 'express'
import { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } from '../controllers/usuarios.js';
import { productosGet, productosPost, productosPut, productosDelete } from '../controllers/productos.js';
import { pedidosGet, pedidosPost, pedidosPut, pedidosDelete } from '../controllers/pedidos.js';
import { loginPost, registroPost } from '../controllers/login.js';
import { informesVentasGet, ventasGet, ventasPost } from '../controllers/ventas.js';

const router = Router();

//Mantenedores pedidos
router.get('/pedidos', pedidosGet);
router.post('/pedidos', pedidosPost);
router.put('/pedidos', pedidosPut);
router.delete('/pedidos', pedidosDelete);

//Mantenedores productos
router.get('/productos', productosGet);
router.post('/productos', productosPost);
router.put('/productos', productosPut);
router.delete('/productos', productosDelete);

//Mantenedores usuarios
router.get('/usuarios', usuariosGet);
router.put('/usuarios', usuariosPut);
router.post('/usuarios', usuariosPost);
router.delete('/usuarios', usuariosDelete);

//Login
router.post('/login', loginPost);
router.post('/registro', registroPost);

//Ventas
router.get('/ventas', ventasGet);
router.post('/ventas', ventasPost);
router.get('/informes', informesVentasGet);

export default router;