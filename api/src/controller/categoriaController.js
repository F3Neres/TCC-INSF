
import { imagemCategoria, inserirCategoria, listarCategoria } from "../repository/categoriaRepository.js";

import multer from 'multer'

import { Router } from "express";
const server = Router();
const upload = multer({ dest: 'storage/image' });


server.post('/categoria', async (req, resp) => {
    try {
        const categoriaInserir = req.body;

        if (!categoriaInserir.nome) {
            throw new Error('Nome da categoria é obrigatorio!')
        }
        if (!categoriaInserir.descricao) {
            throw new Error('Descrição da categoria é obrigatorio!')
        }

        const categoria = await inserirCategoria(categoriaInserir);
        
        resp.send(categoria);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/categoria/:id/imagem', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await imagemCategoria(imagem, id);       
        if (resposta != 1) {
            throw new Error('A imagem não pode ser salva.');
        }

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/listarCategoria', async (req, resp) => {
    try {
        const resposta = await listarCategoria();
        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;