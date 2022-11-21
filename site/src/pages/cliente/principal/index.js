import './index.scss';
import '../../common/index.scss'

import { categoriaHome, ComprarServico } from '../../../api/categoriaCliente.js'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import storage from 'local-storage';

import { Link } from 'react-router-dom'

import Carrinho from '../../../componets/cardCarrinho';


import lavagem from '../../../images/lavagens-servico.png'
import higienizações from '../../../images/higienizacao-servico.png'
import renovaçãopintura from '../../../images/renovacaopintura-servico.png'
import padrao from '../../../images/higienizacaocompleta.jpg'
import recusar from '../../../images/xis.png'
import { API_URL } from '../../../api/config.js';




//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    const [usuario, setUsuario] = useState('-');
    const [categoria, setCategoria] = useState([]);

    const navigate = useNavigate();

    
    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/home/inicio')
        }
        else{
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.apelido);
        }
    }, [])


    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/home/inicio')
    }


    function exibir(imagem) {
        if (!imagem)
            return `/higienizacaocompleta.jpg`;
        else 
            return `${API_URL}/${imagem}`
    }
    
    
    
    async function listarC(){
        const r = await categoriaHome();
        setCategoria(r);
    }

    

    function abrirDetalhes(id){
        navigate('/descricao/' + id + '/cliente')
    }


    const[itens, setItens] = useState([]);

    function calcularValor (){
        let total = 0 ;
        for (let item of itens){
            total = total + item.servico.info.valor * item.qtd;
        }
        return total
    }




    function removerItem(id){
        console.log('aquii'+id)
        let carrinho = storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        storage('carrinho', carrinho);
        carregarCarrinho();
        alert('Servico removido')
    }


    async function carregarCarrinho(){
        let carrinho = storage('carrinho');
        if(carrinho){          

            let temp = [];

            for (let servico of carrinho){
              let p = await ComprarServico(servico.id);

              temp.push({
                servico: p,
                qtd: servico.qtd
              })
            }
            setItens(temp);
        }
        
        
    }


    useEffect(() => {
        listarC();
        carregarCarrinho();
    },[]) 


   

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

                {categoria.map(item => 
                    <div className='caixa'>
                        <h1 className='t2'> {item.categoria} </h1>
                        <img src={exibir(item.imagem)} alt="" width="85%" height="75%" />
                        
                        <button className='b1' onClick={() => abrirDetalhes (item.id)}> SAIBA MAIS  ➤</button>                                                           
                    </div>
                )}
             

                

            </section>

            <hr className='line'/>

            <section className='faixa-3'> 

                <h1 className='t5'> SERVIÇOS ADICIONADOS </h1>
                <h2>Total</h2>
                <h3>R$ {calcularValor()}</h3>

                
                {itens.map(item => 
                    <Carrinho item={item} removerItem={removerItem} />
                )}          

                <div className='botoes'>
                    <Link to='/cliente/pedido'> <button className='b4'>ACOMPANHAR PEDIDO </button> </Link>
                    <Link to='/cliente/pagamento'> <button className='b5'> PAGAR E AGENDAR </button> </Link>
                </div>

            </section>
                        
        </main>


    )


}


