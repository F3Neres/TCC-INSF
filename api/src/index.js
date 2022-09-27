import 'dotenv/config'

import adminController from './controller/adminController.js'
import categoriaController from './controller/categoriaController.js'
import servicoController from './controller/servicoController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json())

//liberar arquivos da storage
server.use('/storage/image', express.static('storage/image'));


// configuração endpoints
server.use(adminController);
server.use(categoriaController);
server.use(servicoController)






server.listen(process.env.PORT, 
                () => console.log( `API online na porta ${process.env.PORT}`));