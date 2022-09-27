
import { imagemServico, inserirServico } from "../repository/servicoRepository.js";

import multer from 'multer'

import { Router } from "express";
const server = Router();
const upload = multer({ dest: 'storage/image' });


server.post('/servico' , async (req, resp) => {
    try {
        const servicoInserir = req.body;

        if (!servicoInserir.categoria) {
            throw new Error('Categoria é obrigatorio!')
        }
        if (!servicoInserir.nome) {
            throw new Error('Nome é obrigatorio!')
        }
        if (!servicoInserir.descricao) {
            throw new Error('Descrição é obrigatorio!')
        }
        if (!servicoInserir.valor) {
            throw new Error('Valor é obrigatorio!')
        }

        const servico = await inserirServico(servicoInserir);

        resp.send(servico);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/servico/:id/imagem', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await imagemServico(imagem, id);       
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



export default server;