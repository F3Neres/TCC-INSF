import './index.scss';
import '../../common/index.scss'

import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import storage from 'local-storage';
import { salvarNovoPedido } from '../../../api/pedidoApi.js';








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


    const [itens, setItens] = useState([]);

    const[nome, setNome] = useState('')
    const[numero, setNumero] = useState('')
    const[validade, setValidade] = useState('')
    const[seguranca, setSeguranca] = useState('')
    const[data, setData] = useState('')
    const[hora, setHora] = useState('')




    async function salvarPedido(){


        try {
            let servico = storage('carrinho')
            let id = storage ('usuario-logado').id

            let pedido = 
            {   
                data: data,
                hora: hora,
                tipoPagamento: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    validade: validade,
                    codSeguranca: seguranca
                },
                  servico: servico
            }
    
            const r = await salvarNovoPedido(id, pedido)
            alert('Pedido inserido')
            storage('carrinho', []);
            navigate('/cliente/principal')
            
        } catch (err) {
            alert(err.response.data.erro);
        }

       
        
    }




    return(
        <main className='pagamento'>
             <Link className="links" to="/cliente/principal"><button className='botao '> Voltar</button></Link>
            
            
            <div className='left'>
                
            
                
                <h1>Pagamento e agendamento</h1>
                


                <div className='caixa'>

                    <div>
                        <h3>Nome:</h3>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>

                        <h3>Numero do cartão:</h3>
                        <input type="text" value={numero} onChange={e => setNumero(e.target.value)}/>

                        <h3>Codigo de segurança:</h3>
                        <input type="text" value={seguranca} onChange={e => setSeguranca(e.target.value)}/>

                        <h3>Data de validade</h3>
                        <input type="text" value={validade} onChange={e => setValidade(e.target.value)}/>
                    </div>
                    

                        <div className='right'>
                 

                    <div className='sub-right'>
                        <h3>Data:</h3>
                        <input type = "date" value={data} onChange={e => setData(e.target.value)}/>
                    </div>

                    <div>
                        <h3>Horario:</h3>
                        <input type= 'time' value={hora} onChange={e => setHora(e.target.value)}/>
                    </div>

                    <button onClick={salvarPedido}>Concluir</button>

            </div>



                </div>

            </div>

            


            
        </main>
    )
}