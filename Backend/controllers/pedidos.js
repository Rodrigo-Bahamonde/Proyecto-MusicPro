import { response, request } from 'express'


//Obtener estado de pedidos
const pedidosGet = (req = request, res = response) => {

    // const query = req.query;
    const {api, nombre='no name'} = req.query;

    res.json({
        msg: 'get API controller',
        api,
        nombre
    })
};

//Ingresar un nuevo pedido
const pedidosPost = (req, res = response) => {

    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post API controller',
        nombre,
        edad,
    })
};

//Actualizar el estado de un pedido
const pedidosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Put API controller',
        id
    })
};

//Desactivar un pedido (Canelar)
const pedidosDelete = (req, res = response) => {

    res.json({
        msg: 'Delete API controller'
    })
};


export {
    pedidosGet,
    pedidosPost,
    pedidosPut,
    pedidosDelete,
}