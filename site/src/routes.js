import {BrowserRouter, Routes, Route } from 'react-router-dom';

//admin
import LoginAdm from './pages/admin/login/index.js'
import Categoria from './pages/admin/categoria/index.js'
import Consultar from './pages/admin/consultar/index.js'
import Home from './pages/admin/home/index.js'
import AdmServico from './pages/admin/servico/index.js'
import Agenda from './pages/admin/agenda/index.js'

//cliente
import LoginCliente from './pages/cliente/login/index.js'
import Cadastro from './pages/cliente/cadastro/index.js'
import Descricao1 from './pages/cliente/descricao/higienizacoes/index.js'
import Descricao2 from './pages/cliente/descricao/lavagens/index.js'
import Descricao3 from './pages/cliente/descricao/renovacaopintura/index.js'
import Pagamento from './pages/cliente/pagamento/index.js'
import Pedido from './pages/cliente/pedido/index.js'
import Principal from './pages/cliente/principal/index.js'



//LadingPage
import LadingPage from './pages/home/index.js'
import Servico from './pages/servico/inicio/index.js'
import Lavagem from './pages/servico/lavagem/index.js'
import Higienizacao from './pages/servico/higienizacao/index.js'
import Renovacaopintura from './pages/servico/renovacaopintura/index.js'
import Inicio from './pages/inicio/index.js'
import Contato from './pages/contato/index.js'



export const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element={<LadingPage />} />
                <Route path = '/home/servico' element={<Servico/>} />
                <Route path = '/home/inicio' element={<Inicio/>} />
                <Route path = '/home/contato' element={<Contato/>} />
                <Route path = '/cliente/principal' element={<Principal/>} />
                <Route path = '/Loginadmin' element={<LoginAdm />} />
                <Route path = '/categoria' element={<Categoria />} />
                <Route path = '/servico' element={<AdmServico />} />
                <Route path = '/servico/lavagem' element={< Lavagem />} />
                <Route path = '/servico/higienizacao' element={<Higienizacao />} />
                <Route path = '/servico/renovacaopintura' element={<Renovacaopintura />} />
                <Route path = '/consultar' element={<Consultar />} />
                <Route path = '/homeadmin' element={<Home />} />
                <Route path = '/agenda' element={<Agenda />} />
                <Route path = '/login/cliente' element={<LoginCliente />} />
                <Route path = '/cadastro' element={<Cadastro/>} />
                <Route path = '/descricao/higienizacoes' element={<Descricao1 />} />
                <Route path = '/descricao/lavagens' element={<Descricao2 />} />
                <Route path = '/descricao/renovacaopintura' element={<Descricao3 />} />
                <Route path = '/cliente/pagamento' element={<Pagamento />} />
                <Route path = '/cliente/pedido' element={<Pedido/>} />
                <Route path = '/cliente/principal' element={<Principal/>} />
                
            </Routes>
        </BrowserRouter>
    );
}