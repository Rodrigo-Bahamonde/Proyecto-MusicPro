import { response, request } from 'express'
import Usuario from '../models/usuario.js';

const data = [
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen",
        "rol": 4,
        "activo": true,
    },
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen",
        "rol": 4,
        "activo": true,
    },
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen",
        "rol": 4,
        "activo": true,
    },
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen",
        "rol": 4,
        "activo": true,
    },
]

//Ver usuarios
const usuariosGet = (req = request, res = response) => {

    //Obtener los usuarios de la BD

    res.json({
        data
    })
};

//Crear un usuario
const usuariosPost = async(req, res = response) => {

    // const { email, password, nombre, imagen } = req.body;
    const body = req.body;
    const usuario = new Usuario(body);

    //Verificar si el usuario existe

    //Encriptar la contraseña

    //Guardar en la base de datos
    await usuario.save();

    res.json({
        usuario
    })
};

//Actualizar usuario
const usuariosPut = (req, res = response) => {

    const { email, password, nombre, imagen } = req.body;

    //Validar que email existe

    //Encriptar la contraseña

    //Guardar en la base de datos

    res.json({
        email,
        password,
        nombre,
        imagen
    })
};

//Deshabilitar usuario
const usuariosDelete = (req, res = response) => {

    //Validar que email existe

    //Desactivar en base de datos

    const { email } = req.body;
    res.json({
        email
    })
};


export {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}