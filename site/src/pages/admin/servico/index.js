import '../../common/index.scss'
import './index.scss'

import Lateral from '../../../componets/lateral/index.js'

import { cadastrarServico, imagemServico } from '../../../api/cadastrarServico'
import { listarCategoria } from '../../../api/cadastrarCategoria'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Index() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [valor, setValor] = useState(0);

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const NovoServico = _=>{
        setNome('');
        setDescricao('');
        setValor('');
    }

    const Categoria = async () =>{
        const r = await listarCategoria();
        setCategoria(r);
    }

    const Salvar =  async () => {
        try {

            const novoSevico = await cadastrarServico(idCategoria, nome, descricao, valor);
            const r = await imagemServico(novoSevico.id, imagem)
            NovoServico();

            alert('Serviço cadastrado');

        } catch (err) {
            alert(err.message);
        };
    };

    function escolherImagem() {
        document.getElementById('caixa-file').click();
    }

    function mostrarImagem(){
        return URL.createObjectURL(imagem)
    }

    
    useEffect(()=>{
        Categoria();
    },  []);

    
    // const uploadImage = async e => {

    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append('imagem', imagem);
    // }


    return(

        <main className='servico'>

            <Lateral />

            <section className='pag-centro'>

                <div className='cabecalho-centro'>
                    <h1>CADASTRO DE SERVIÇO</h1>
                </div>

                <div className='meio'>

                    <div className='caixas'>
                        <div className='nome'>
                            <h2>Nome: </h2>
                            <input type = "text" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>

                        <div className='valor'>
                            <h2 className='h2-valor'>Valor: </h2>
                            <input type = "number" value={valor} onChange={e => setValor(e.target.value)}/>
                        </div>

                        <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)}>
                                            <option value="Selecione">Selecione</option>
                                            {categoria.map(item =><option key={item.id} value={item.id}> {item.categoria}</option>)}
                                        </select>


                        <div className='descricao'>
                            <h2>Descrição:</h2>
                            <textarea value={descricao} onChange={e => setDescricao(e.target.value)}/>
                        </div>

                    </div>

                    <div className='direita'>

                    <div className='imagem' onClick={escolherImagem}>
                            <h2>Imagem</h2>

                            <div className = 'img'>
                                {!imagem &&
                                    <input className= 'caixa-img' type = "image"/> 
                                }
                                {imagem &&
                                    <img className='mImagem' src={mostrarImagem()} alt=''/>
                                }
                                
                                <input type ="file" id ='caixa-file' onChange={e => setImagem(e.target.files[0])} />
                             
                             </div>
                        </div>

                        <button onClick={Salvar}>CADASTRAR SERVIÇO</button>

                    </div>
                
                </div>


            </section>


        </main>



    )

}