import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function listarServico(){
    const resposta = await api.get('/listarServico');
    return resposta.data
}

export async function removerServico(id){
    const resposta = await api.delete('/removerServico/' + id);
    return resposta.data
}

export async function buscarServicoNome(nome){
    const resposta = await api.get(`/servicoNome?nome=${nome}`)
    return resposta.data;
}

export async function buscarCategoriaNome(catNome){
    const resposta = await api.get(`/servicoCategoria?catNome=${catNome}`)
    return resposta.data;
}

export async function buscarCategoriaValor(valor){
    const resposta = await api.get(`/servicoValor?valor=${valor}`)
    return resposta.data;
}