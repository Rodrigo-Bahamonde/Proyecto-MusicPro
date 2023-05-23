import { response, request } from 'express'
import Producto from '../models/producto.js'
import { productosGet } from './productos.js';

//mostrar home
const homeGet = async(req = request, res = response) => {
    
    const productos = await Producto.find()

    res.render('home',{productos});
}


export { homeGet }