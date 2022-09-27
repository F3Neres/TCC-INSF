import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginAdm from './pages/admin/login/index.js'
import Categoria from './pages/admin/categoria/index.js'
import Servico from './pages/admin/servico/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LoginAdm />} />
        <Route path = '/categoria' element={<Categoria />} />
        <Route path = '/servico' element={<Servico />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


