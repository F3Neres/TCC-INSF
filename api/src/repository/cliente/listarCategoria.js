import { con } from "../connection.js";

export async function categoriaHome(){
    const comando = `
    SELECT  id_categoria           as id,
            nm_categoria           as categoria,
            img_categoria		   as img
    
    FROM tb_categoria;
    `

    const [registros] = await con.query(comando);
    return registros;
}