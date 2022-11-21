import 'dotenv/config'

import adminController from './controller/admin/adminController.js'
import categoriaController from './controller/admin/categoriaController.js'
import servicoController from './controller/admin/servicoController.js'

import loginCliente from './controller/cliente/loginCliente.js'
import cadastrarCliente from './controller/cliente/loginCliente.js'
import cadastrarLogin from './controller/cliente/loginCliente.js'

import listarCategoria from './controller/cliente/listarCategoria.js'

import PedidoController from './controller/cliente/PedidoController.js'


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
server.use(servicoController);

server.use(loginCliente);
server.use(cadastrarCliente);
server.use(cadastrarLogin);

server.use(listarCategoria);
server.use(PedidoController);






server.listen(process.env.PORT, 
                () => console.log( `API online na porta ${process.env.PORT}`));