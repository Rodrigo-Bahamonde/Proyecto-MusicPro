import { response, request } from 'express'



//Iniciar sesion
const loginPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({
        msg: 'inicio sesion',
        nombre,
        edad,
    })
};

//Registro
const registroPost = (req = request, res = response) => {

    // const query = req.query;
    const {api, nombre='no name'} = req.query;

    res.json({
        msg: 'get API controller',
        api,
        nombre
    })
};


export {
    loginPost,
    registroPost,
}