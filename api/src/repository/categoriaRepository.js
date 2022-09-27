
import { con } from "./connection.js"


export async function inserirCategoria(categoria) {
    const comando =
        `INSERT INTO tb_categoria (nm_categoria, ds_descricao)
                VALUES (?, ?)`
    const [resposta] = await con.query(comando, [categoria.nome, categoria.descricao]);
    categoria.id = resposta.insertId;

    return categoria;
}


export async function imagemCategoria(imagem, id){
    const comando = 
    `UPDATE tb_categoria
        SET img_categoria        = ?
      WHERE id_categoria         = ?`

      const [resposta] = await con.query(comando, [imagem, id]);
      return resposta.affectedRows
}

export async function listarCategoria () {
    const comando = 
        `SELECT id_categoria         as id,
                nm_categoria         as categoria
          FROM tb_categoria`

    const [linhas] =await con.query(comando);
    return linhas
}