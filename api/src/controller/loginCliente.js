import { Router } from "express";
import { clienteLogin } from "../repository/loginCliente.js";
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
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;