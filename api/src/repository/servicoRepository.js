
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
