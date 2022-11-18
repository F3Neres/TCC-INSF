
import { imagemServico, inserirServico, listarServico, listarServicoCategoria, listarServicoNome, listarServicoValor, removerServico } from "../../repository/admin/servicoRepository.js";

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


server.get('/listarServico', async (req, resp) => {
    try {
        const resposta = await listarServico();
        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('/removerServico/:id', async (req, resp)=> {
    try {
        const id =  req.params.id;

        await removerServico(id);

        resp.status(200).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/servicoNome', async (req, resp) => {
    try {
        const {nome} = req.query;

        const resposta = await listarServicoNome(nome);

        if (resposta.length == 0) {
            resp.status(404).send([])
        }
        else{
            resp.send(resposta)
        }

        }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }  
})

server.get('/servicoCategoria', async (req, resp) => {
    try {
        const {catNome} = req.query;

        const resposta = await listarServicoCategoria(catNome);

        if (resposta.length == 0) {
            resp.status(404).send([])
        }
        else{
            resp.send(resposta)
        }

        }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }  
})

server.get('/servicoValor', async (req, resp) => {
    try {
        const {valor} = req.query;

        const resposta = await listarServicoValor(valor);
        console.log(valor);

        if (resposta.length == 0) {
            resp.status(404).send([])
        }
        else{
            resp.send(resposta)
        }

        }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }  
})



export default server;