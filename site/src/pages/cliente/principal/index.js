import './index.scss';
import '../../common/index.scss'

import { categoriaHome } from '../../../api/categoriaCliente.js'

import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

import { Link } from 'react-router-dom'


import lavagem from '../../../images/lavagens-servico.png'
import higienizações from '../../../images/higienizacao-servico.png'
import renovaçãopintura from '../../../images/renovacaopintura-servico.png'
import recusar from '../../../images/xis.png'



//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    const [usuario, setUsuario] = useState('-');
    const [categoria, setCategoria] = useState('-');


    async function listarC(){
        const r = await categoriaHome();
        setCategoria(r);
    }


 


    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/home/inicio')
        }
        else{
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.apelido);
        }
    }, [])

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/home/inicio')
    }


    return (

        
        <main className='page-cliente'>
            
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

            <section class='faixa1'>

                <div className='user'>            
                    <h3 className='nome'>Bem vindo(a) 
                    {usuario}</h3>
                    <button className='sair' onClick={sairClick}>Sair</button>
                </div>

                <div className='titulo'>
                    <h1 class='t1'> AGENDAMENTO DE SERVIÇOS </h1>
                </div>
            </section>


            <section className='faixa-2'>

                <div className='caixa'>
                    <h1 className='t2'> Lavagens</h1>
                    <img src={lavagem} alt="imagem" width="85%" height="75%" />
                    
                    <button className='b1'><Link to='/descricao/lavagens'> SAIBA MAIS  ➤</Link></button>                                                           
                </div>

                <div className='caixa'>
                    <h1 className='t2'> Higienização Interna</h1>
                    <img src={higienizações} alt="imagem" width="85%" height="75%" />
                    
                    <button className='b1'><Link to='/descricao/higienizacoes'> SAIBA MAIS </Link></button>
                    
                </div>

                <div className='caixa'>
                    <h1 className='t2'> Renovação de Pintura</h1>
                    <img src={renovaçãopintura} alt="imagem" width="85%" height="75%" />
                
                    <button className='b1'><Link to='/descricao/renovacaopintura'> SAIBA MAIS </Link></button>  
                  
                </div>
                

                

                

            </section>

            <hr className='line'/>

            <section className='faixa-3'> 

                <h1 className='t5'> SERVIÇOS ADICIONADOS </h1>

                

                <div className='card'>  

                    <div className='head-card'>

                        <h3>Serviço</h3>
                        <h3>Valor</h3>
                        <img className='xis' src={recusar} alt="imagem" width="40px" height="40px" />

                    </div>
                    
                </div>

                <div className='card'>  

                    <div className='head-card'>

                        <h3>Serviço</h3>
                        <h3>Valor</h3>
                        <img className='xis' src={recusar} alt="imagem" width="40px" height="40px" />

                    </div>
                    
                </div>

                <div className='card'>  

                    <div className='head-card'>

                        <h3>Serviço</h3>
                        <h3>Valor</h3>
                        <img className='xis' src={recusar} alt="imagem" width="40px" height="40px" />

                    </div>
                    
                </div>

                <div className='botoes'>
                    <Link to='/cliente/pedido'> <button className='b4'>ACOMPANHAR PEDIDO </button> </Link>
                    <Link to='/cliente/pagamento'> <button className='b5'> PAGAR E AGENDAR </button> </Link>
                </div>

            </section>
                        
        </main>


    )


}


