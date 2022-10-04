import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginAdm from './pages/admin/login/index.js'
import Categoria from './pages/admin/categoria/index.js'
import Servico from './pages/admin/servico/index.js'
import Home from './pages/home/index.js'
import Consultar from './pages/admin/consultar/index.js'


export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<Home />} />
                <Route path = '/login' element={<LoginAdm />} />
                <Route path = '/categoria' element={<Categoria />} />
                <Route path = '/servico' element={<Servico />} />
                <Route path = '/consultar' element={<Consultar />} />
            </Routes>
        </BrowserRouter>
    );
}