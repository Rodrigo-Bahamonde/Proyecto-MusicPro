import { response, request } from 'express'

const data =[
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        nombreProducto: "Guitarra acustica",
        descripcion: "Da tus primeros pasos y descubre el amor por la música con nuestra excelente guitarra clásica de 39 pulgadas color natural, ideal para principiantes gracias a su gran calidad. Divierte creando y aprendiendo con el instrumento de cuerdas más popular del mercado. (cuerdas de nylon incluidas).",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        nombreProducto: "Guitarra acustica",
        descripcion: "Da tus primeros pasos y descubre el amor por la música con nuestra excelente guitarra clásica de 39 pulgadas color natural, ideal para principiantes gracias a su gran calidad. Divierte creando y aprendiendo con el instrumento de cuerdas más popular del mercado. (cuerdas de nylon incluidas).",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        nombreProducto: "Guitarra acustica",
        descripcion: "Da tus primeros pasos y descubre el amor por la música con nuestra excelente guitarra clásica de 39 pulgadas color natural, ideal para principiantes gracias a su gran calidad. Divierte creando y aprendiendo con el instrumento de cuerdas más popular del mercado. (cuerdas de nylon incluidas).",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        nombreProducto: "Guitarra acustica",
        descripcion: "Da tus primeros pasos y descubre el amor por la música con nuestra excelente guitarra clásica de 39 pulgadas color natural, ideal para principiantes gracias a su gran calidad. Divierte creando y aprendiendo con el instrumento de cuerdas más popular del mercado. (cuerdas de nylon incluidas).",
        imagen: "imagen1",
        stock: 100,
    },
    {
        idProducto: "1",
        categoria: "IC-G-GCS",
        marca: "Ibanez",
        precio: 100000,
        nombreProducto: "Guitarra acustica",
        descripcion: "Da tus primeros pasos y descubre el amor por la música con nuestra excelente guitarra clásica de 39 pulgadas color natural, ideal para principiantes gracias a su gran calidad. Divierte creando y aprendiendo con el instrumento de cuerdas más popular del mercado. (cuerdas de nylon incluidas).",
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