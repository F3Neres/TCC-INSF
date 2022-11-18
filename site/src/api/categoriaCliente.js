import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})



export async function categoriaHome(){
    const resposta = await api.get('/categoriaHome');
    return resposta.data
}