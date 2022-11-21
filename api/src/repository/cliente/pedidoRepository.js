import { con } from "../connection.js";

export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_usuario,
            dt_data,
            ds_hora,
            ds_status,
            tb_pagamento
        )
        VALUES (?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.data,
        novoPedido.hora,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}


export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
            INSERT INTO tb_pagamento_cartao(
                id_pedido,
                nm_pessoa,
                nr_cartao,
                dt_validade,
                cod_seguranca
            )
            VALUES (?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.validade,
        novoPagamento.codSeguranca,
    ]);
    return info.affectedRows;
}


export async function inserirPedidoItem(idPedido, idServico, qtd, valor) {
    const comando = `
        INSERT INTO tb_servico_item (
            id_pedido,
            id_servico,
            qtd_itens,
            vl_servico
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idPedido, idServico, qtd, valor]);
    return info.affectedRows;
}
