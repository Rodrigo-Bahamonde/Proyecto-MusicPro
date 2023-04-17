import { response, request } from 'express'

const data = [
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen"
    },
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen"
    },
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen"
    },
    {
        "email": "email@gmail.com",
        "password": "password",
        "nombre": "Nombre",
        "imagen": "Imagen"
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
const usuariosPost = (req, res = response) => {

    const { email, password, nombre, imagen } = req.body;
    res.json({
        email,
        password,
        nombre,
        imagen
    })
};

//Actualizar usuario
const usuariosPut = (req, res = response) => {

    const { email, password, nombre, imagen } = req.body;
    res.json({
        email,
        password,
        nombre,
        imagen
    })
};

//Deshabilitar usuario
const usuariosDelete = (req, res = response) => {

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