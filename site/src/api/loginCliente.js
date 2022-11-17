import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
});




export async function logar(email, senha){
    const r = await api.post('/cliente/login', { email, senha });
    return r.data;
}

export async function cadastrarCliente(nome, cpf, telefone, apelido) {
    const resposta = await api.post('/cadastro/Cliente', {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        apelido: apelido
    })
    return resposta.data;
}

export async function cadastrarLogin(idUsuario, email, senha) {
    const resposta = await api.post('/cadastro/Login', {
        usuario: idUsuario,
        email: email,
        senha: senha        
    })
    return resposta.data;
}