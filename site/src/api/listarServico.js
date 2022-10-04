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
