import { categoriaHome, CategoriaId, ComprarServico, ServicoPorCategoria } from "../../repository/cliente/listarCategoria.js";

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


server.get('/cliente/categoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const categoria = await CategoriaId(id);

        resp.send({
            info: categoria,

        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/categoria/servico/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const servico = await ServicoPorCategoria(id);
        resp.send(servico)


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/compra/servico/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const servico = await ComprarServico(id);

        resp.send({
            info: servico,

        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;