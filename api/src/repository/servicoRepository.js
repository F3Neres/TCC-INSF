
import { con } from "./connection.js";


export async function inserirServico(servico){
    const comando = 
        `INSERT INTO tb_servico (id_categoria, nm_servico, ds_descricao, nr_valor )
                VALUES (?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [servico.categoria, servico.nome, servico.descricao, servico.valor]);
    servico.id = resposta.insertId;

    return servico

}

export async function imagemServico(imagem, id){
    const comando = 
    `UPDATE tb_servico
        SET img_servico        = ?
      WHERE id_servico         = ?`

      const [resposta] = await con.query(comando, [imagem, id]);
      return resposta.affectedRows
}

export async function listarServico() {
    const comando = `
                select id_servico        as id,
                    nm_categoria                    as categoria,
                    nm_servico                      as servico,
                    nr_valor                        as valor

                from tb_servico
                inner join tb_categoria on tb_servico.id_categoria = tb_categoria.id_categoria

                group 
                    by tb_servico.id_servico,
                        nm_categoria ,
                        nm_servico,
                        nr_valor
        `

    const [registros] = await con.query(comando);
    return registros;

}


export async function removerServico(idServico){
    const comando = `
        delete from tb_servico
              where id_servico = ?
    `

    const {resp} =  await con.query(comando, [idServico])
    return resp
}