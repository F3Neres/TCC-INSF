import './index.scss';
import '../../../common/index.scss'

import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import storage from 'local-storage';

import lavagem from '../../../../images/lavagens-servico.png'
import lavagens from '../../../../images/img-lavagens.png'
import lavagens2 from '../../../../images/img-lavagens2.png'
import lavagens3 from '../../../../images/img-lavagens3.png'
import { buscarCategoriaPorId, servicoPorIdCategoria } from '../../../../api/categoriaCliente.js';
import { API_URL } from '../../../../api/config.js';



//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

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

    const [categoria, setCategoria] = useState({info: {}});
    const [servico, setServico] = useState([])

    const { id, idS } = useParams();


    async function carregarPagina(){
        const r = await buscarCategoriaPorId(id)
        setCategoria(r)
    }

    async function carregarServico(){
        const r = await servicoPorIdCategoria(id)
        setServico(r)

    }


    useEffect(() => {
        carregarPagina();
        carregarServico();
    }, [])

    function exibir(imagem) {
        if (!imagem)
            return `{lavagem}`;
        else 
            return `${API_URL}/${imagem}`
    }


    function adicionarCarrinho(){
        let carrinho = []
        console.log(idS)
        if (storage('carrinho')){
            carrinho = storage('carrinho')
        }
        if(!carrinho.find(item => item.idS === item.idS)){
            carrinho.push({
                id: idS,
                qtd: 1
            })
            storage ('carrinho', carrinho)
        }
    }
       





    return (

        
        <main className='page-lavagem'>
            

            <section class='faixa1'>

                <div className='user'>            
                    <h3 className='nome'>Bem vindo(a) {usuario}</h3>
                    <button className='sair' onClick={sairClick}>Sair</button>
                </div>

                <div className='titulo'>
                    <h1 class='t1'> {categoria.info.categoria}  </h1>
                </div>

            </section>


            <section className='faixa2'>

                <div className='imgC'>

                    <img src={exibir(categoria.info.imagem)} alt="imagem" width="99%" height="99%" />

                </div>

                <div className='txtC'>


                    <p className='p1'> {categoria.info.descricao}</p>

                </div>


            </section>






            <hr className='line'/>

            <section class='faixa3'>

                {servico.map(item =>
                <div className='card'>
                    <div className='card-meio' >
                        <div className='imagem'> 
                            <img src={exibir(item.imagem)} alt="imagem" width="99%" height="99%" />
                        </div>
                        
                        <div className='textos'>
                            <h1 className='t2'>{item.idS}</h1>
                            
                            <hr className='line'/>

                            <p className='p2'>{item.descricao}</p>
                                        
                        </div>
                    </div>

                     <button className='b1' onClick={adicionarCarrinho}> Adicionar Serviço </button>
                </div>
                )}


            </section>



            <Link to='/cliente/principal'> <button className='botao1'> Voltar Para Página Principal</button> </Link>

            <br />
            
        </main>


    )


}