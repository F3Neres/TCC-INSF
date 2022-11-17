import { Router } from "express";
import { cadastrarCliente, cadastrarLogin, clienteLogin } from "../repository/loginCliente.js";
const server = Router();


server.post('/cliente/login', async (req,resp) => {
    try {
        const { email, senha } = req.body;

        const r = await clienteLogin(email, senha);

        if(!r) {
            throw new Error('Credenciais invalidas!')
        }

        resp.send({
            id: r.id,
            nome: r.nome
        })

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


server.post('/cadastro/Cliente' , async (req, resp) => {
    try {
        const cliente = req.body;

        if (!cliente.nome) {
            throw new Error('Nome é obrigatorio!')
        }
        if (!cliente.cpf) {
            throw new Error('CPF é obrigatorio!')
        }
        if (!cliente.telefone) {
            throw new Error('Telefone é obrigatorio!')
        }
        if (!cliente.apelido) {
            throw new Error('Apelido é obrigatorio!')
        }

        const cadastro = await cadastrarCliente(cliente);

        resp.send(cadastro);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.post('/cadastro/Login' , async (req, resp) => {
    try {
        const login = req.body;

        if (!login.usuario) {
            throw new Error('Usuario é obrigatorio!')
        }
        if (!login.email) {
            throw new Error('Email é obrigatorio!')
        }
        if (!login.senha) {
            throw new Error('Senha é obrigatorio!')
        }

        const cadastro = await cadastrarLogin(login);

        resp.send(cadastro);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;