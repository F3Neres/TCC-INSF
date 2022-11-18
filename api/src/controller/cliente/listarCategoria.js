import { categoriaHome } from "../../repository/cliente/listarCategoria.js";

import { Router } from "express";
const server = Router();


server.get('/categoriaHome', async (req, resp) => {
    try {
        const resposta = await categoriaHome();

        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;