import './index.scss';
import '../../../common/index.scss'

import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import storage from 'local-storage';
import { API_URL } from '../../../../api/config.js';

import { buscarCategoriaPorId, servicoPorIdCategoria, ComprarServico } from '../../../../api/categoriaCliente.js';



export default function Index(){

    const [usuario, setUsuario] = useState('-');
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



    const [servico, setServico] = useState({info: {}});
    const [categoria, setCategoria] = useState([])

    const { id } = useParams();


    async function carregarPagina(){
        const r = await buscarCategoriaPorId(id)
        setCategoria(r)
    }

    async function carregarServico(){
        const r = await ComprarServico(id)
        setServico(r)
        
    }


    useEffect(() => {
        carregarPagina();
        carregarServico();
        console.log(servico)

    }, [])

    function exibir(imagem) {
        if (!imagem)
            return `/higienizacaocompleta.jpg`;
        else 
            return `${API_URL}/${imagem}`
    }

 

    function adicionarCarrinho(){
        let carrinho = []
        if (storage('carrinho')){
            carrinho = storage('carrinho')
        }
        if(!carrinho.find(item => item.id === id)){
            carrinho.push({
                id: id,
                qtd: 1
            })
            storage ('carrinho', carrinho)
        }
        alert('Serviço adicionado ao carrinho')        
    }




    return(

        <main className='desc'>

            <section class='faixa1'>

                <div className='user'>            
                    <h3 className='nome'>Bem vindo(a) {usuario}</h3>
                    <button className='sair' onClick={sairClick}>Sair</button>
                </div>

                <div className='titulo'>
                    <h1 class='t1'> Adione o serviço ao carrinho </h1>
                </div>

            </section>


            

            <section class='faixa3'>

                
                <div className='card'>
                    <div className='card-meio' >
                        <div className='imagem'> 
                            <img src={exibir(servico.info.imagem)} alt="imagem" width="99%" height="99%" />
                        </div>
                        
                        <div className='textos'>
                            <h1 className='t2'>{servico.info.servico}</h1>
                            
                            <hr className='line'/>

                            <p className='p2'>{servico.info.descricao}</p>

                           
                                        
                        </div>
                    </div>

                    <p className='p2'>R$ {servico.info.valor}</p>

                     <button className='b1' onClick={adicionarCarrinho}> Adicionar Serviço </button>
                </div>

                <hr className='line'/>
            


            </section>



            <Link to='/cliente/principal'> <button className='botao1'> Voltar Para Página Principal</button> </Link>

            
            
        </main>
    )
}