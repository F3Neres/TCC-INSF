import { con } from "../connection.js";

export async function clienteLogin(email, senha){
    const comando = `
    select tb_usuario.id_usuario		id,
            nm_usuario					nome,
            nm_apelido                  apelido
        from tb_usuario
        inner join tb_login_usuario on tb_login_usuario.id_usuario = tb_usuario.id_usuario
        where ds_email = ?
        and ds_senha = md5(?);    
    `

    const [registros] = await con.query(comando, [email, senha]);
    return registros[0]
}

export async function cadastrarCliente(cliente){
    const comando = 
        `INSERT INTO tb_usuario (nm_usuario, ds_cpf, ds_telefone, nm_apelido )
            VALUES (?, ?, ?, ?);`
    const [resposta] = await con.query(comando, [cliente.nome, cliente.cpf, cliente.telefone, cliente.apelido]);
    cliente.id = resposta.insertId;

    return cliente
}

export async function cadastrarLogin(login){
    const comando = 
        `INSERT INTO tb_login_usuario (id_usuario, ds_email, ds_senha )
                        VALUES (?, ?, md5(?));`
    const [resposta] = await con.query(comando, [login.usuario, login.email, login.senha]);
    login.id = resposta.insertId;

    return login

}