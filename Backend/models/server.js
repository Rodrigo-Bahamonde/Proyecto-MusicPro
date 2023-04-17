import express from 'express';
import cors from 'cors';
import router from '../routes/routes.js'
import dbConnection from '../database/config.js'

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routePath = '/api'

        //Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + process.env.PORT)
        })
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.routePath, router);
    }

    async conectarDB() {
        await dbConnection();
    }


}

export default Server;