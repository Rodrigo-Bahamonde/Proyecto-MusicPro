import { response, request } from 'express'

const data =[
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        descripcion: "Guitarra acustica",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        descripcion: "Guitarra acustica",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        descripcion: "Guitarra acustica",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        descripcion: "Guitarra acustica",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        descripcion: "Guitarra acustica",
        imagen: "imagen1",
        stock: 100,
    },
]


//Obtener productos
const productosGet = (req = request, res = response) => {

    //Obtener productos de base de datos

    //Mostrar estado del producto segun stock

    // const query = req.query;
    // const {api, nombre='no name'} = req.query;

    res.json({
        data
    })
};

//Ingresar un nuevo producto
const productosPost = (req = request, res = response) => {

    //Validar que al agregar un producto solo sea administrador o vendedor


    //Guardar en base de datos


    const { idProducto, categoria, marca, precio, imagen } = req.body;
    res.json({
        idProducto,
        categoria,
        marca,
        precio,
        imagen
    })
};

//Actualizar un producto
const productosPut = (req = request, res = response) => {

    //Validar que cambios sean de parte de admin y vendedor


    const { idProducto, categoria, marca, precio, imagen } = req.body;
    res.json({
        idProducto,
        categoria,
        marca,
        precio,
        imagen
    })
};

//Desactivar un producto (deshabilitar)
const productosDelete = (req = request, res = response) => {

    const { idProducto } = req.body;

    res.json({
        idProducto
    })
};


export {
    productosGet,
    productosPost,
    productosPut,
    productosDelete,
}