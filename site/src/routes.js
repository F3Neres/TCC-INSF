import {BrowserRouter, Routes, Route } from 'react-router-dom';

//admin
import LoginAdm from './pages/admin/login/index.js'
import Categoria from './pages/admin/categoria/index.js'
import Consultar from './pages/admin/consultar/index.js'
import Home from './pages/admin/home/index.js'
import Servico from './pages/admin/servico/index.js'
import Agenda from './pages/admin/agenda/index.js'

//cliente
import LoginCliente from './pages/cliente/login/index.js'
import Cadastro from './pages/cliente/cadastro/index.js'
import Descrição from './pages/cliente/descrição/index.js'
import Descrição1 from './pages/cliente/descrição/higienizações/index.js'
import Descrição2 from './pages/cliente/descrição/lavagens/index.js'
import Descrição3 from './pages/cliente/descrição/renovaçãopintura/index.js'
import Pagamento from './pages/cliente/pagamento/index.js'
import Pedido from './pages/cliente/pedido/index.js'
import Principal from './pages/cliente/principal/index.js'



//LadingPage
import LadingPage from './pages/home/index.js'
import Serviço from './pages/serviço/index.js'
import Inicio from './pages/inicio/index.js'
import Contato from './pages/contato/index.js'



export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<LadingPage />} />
                <Route path = '/home/serviço' element={<Serviço/>} />
                <Route path = '/home/inicio' element={<Inicio/>} />
                <Route path = '/home/contato' element={<Contato/>} />
                <Route path = '/cliente/principal' element={<Principal/>} />
                <Route path = '/Ladmin' element={<LoginAdm />} />
                <Route path = '/categoria' element={<Categoria />} />
                <Route path = '/servico' element={<Servico />} />
                <Route path = '/consultar' element={<Consultar />} />
                <Route path = '/homeadmin' element={<Home />} />
                <Route path = '/agenda' element={<Agenda />} />
                <Route path = '/login/cliente' element={<LoginCliente />} />
                <Route path = '/cadastro' element={<Cadastro/>} />
                <Route path = '/descricao' element={<Descrição />} />
                <Route path = '/descricao/higienizações' element={<Descrição1 />} />
                <Route path = '/descricao/lavagens' element={<Descrição2 />} />
                <Route path = '/descricao/renovaçãopintura' element={<Descrição3 />} />
                <Route path = '/cliente/pagamento' element={<Pagamento />} />
                <Route path = '/cliente/pedido' element={<Pedido/>} />
                <Route path = '/cliente/principal' element={<Principal/>} />
                
            </Routes>
        </BrowserRouter>
    );
}