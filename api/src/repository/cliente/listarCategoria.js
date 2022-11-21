import { con } from "../connection.js";

export async function categoriaHome(){
    const comando = `
    SELECT  id_categoria           as id,
            nm_categoria           as categoria,
            img_categoria		   as imagem
    
    FROM tb_categoria;
    `

    const [registros] = await con.query(comando);
    return registros;
}


export async function CategoriaId(id){
    const comando =`
    select      id_categoria         as id,
                nm_categoria         as categoria,
                img_categoria        as imagem,
                ds_descricao         as descricao

        from tb_categoria
        where id_categoria = ?  `

        const [linhas] = await con.query(comando, [id]);
        return linhas[0];
}


export async function ServicoPorCategoria(id){
        const comando = `
        SELECT          id_servico              as id,
			id_categoria		as idCategoria,
                        nm_servico        	as servico,
                        img_servico             as imagem,
                         ds_descricao		as descricao,
                        nr_valor          	as valor       
        FROM tb_servico

        WHERE id_categoria        like ?;
        `
        const [linhas] = await con.query(comando, [id]);
        return linhas;
}

export async function ComprarServico(id){
        const comando = `
        SELECT          id_servico              as id,
			id_categoria		as idCategoria,
                        nm_servico        	as servico,
                        img_servico             as imagem,
                         ds_descricao		as descricao,
                        nr_valor          	as valor       
        FROM tb_servico

        WHERE id_servico       like ?;
        `
        const [linhas] = await con.query(comando, [id]);
        return linhas[0];
}