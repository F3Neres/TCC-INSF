import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})



export async function categoriaHome(){
    const resposta = await api.get('/categoriaHome');
    return resposta.data
}


export async function buscarCategoriaPorId(id){
    const r = await api.get('/cliente/categoria/' + id);
    return r.data
}

export async function servicoPorIdCategoria(id){
    const r = await api.get('/categoria/servico/' + id);
    return r.data
}