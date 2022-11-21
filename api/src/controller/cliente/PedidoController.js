import { Router } from "express";
import { ComprarServico } from "../../repository/cliente/listarCategoria.js";
import { inserirPagamento, inserirPedido, inserirPedidoItem } from "../../repository/cliente/pedidoRepository.js";
import { criarNovoPedido } from "../../service/servicoService.js";

const server = Router();




server.post('/pedido/:idUsuario', async (req, resp) => {

    try{
        const { idUsuario } = req.params;
        const info = req.body;

        const novoPedido = criarNovoPedido(idUsuario, info);
        

        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);
        console.log(info.cartao)



        for(let item of info.servico){
            const serv = await ComprarServico(item.id)
            await inserirPedidoItem(idPedidoCriado, serv.id, item.qtd, serv.valor)
        }

        resp.status(204).send();

    }
    catch(err){
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }

})








export default server;