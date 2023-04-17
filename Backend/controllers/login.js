import { response, request } from 'express'



//Iniciar sesion
const loginPost = (req, res = response) => {

    const { email, contraseña } = req.body;
    res.json({
        email,
        contraseña
    })
};

//Registro
const registroPost = (req = request, res = response) => {

    // const query = req.query;
    const { email, password, nombre } = req.query;

    res.json({
        email,
        password,
        nombre
    })
};


export {
    loginPost,
    registroPost,
}