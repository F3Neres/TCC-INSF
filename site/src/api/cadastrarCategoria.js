import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function cadastrarCategoria(nome, descricao) {
    const resposta = await api.post('/categoria', {
        nome: nome,
        descricao: descricao
    })
    return resposta.data;
}

export async function imagemCategoria(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/categoria/${id}/imagem`, formData, {
        headers: {
            "content-Type": "multipart/form-data"
        },
    })
    return resposta.status;
}

export async function listarCategoria(){
    const resposta = await api.get('/listarCategoria');
    return resposta.data
}