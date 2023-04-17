import { response, request } from 'express'

//Ingresar una nueva venta
const ventasPost = (req, res = response) => {

    res.json({
        msg: 'nueva venta',
    })
};

const informesVentasGet = (req = request, res = response) => {

    //Obtener data de BD y transformarla a CSV

    res.json({
        data: "archivo CSV de ventas"
    })
};


export {
    ventasPost,
    informesVentasGet
}