import '../../common/index.scss'
import './index.scss'

import { cadastrarCategoria, imagemCategoria } from '../../../api/cadastrarCategoria'
import Lateral from '../../../componets/lateral/index.js'

import storage from "local-storage"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



export default function Index() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState();

    async function salvarCLick(){
        try {
            const novaCategoria = await cadastrarCategoria(nome, descricao);
            const r = await imagemCategoria(novaCategoria.id, imagem);

            alert('Categoria cadastrada');
        } catch (err) {
            alert(err.message);
        }

    }

    function escolherImagem() {
        document.getElementById('caixa-file').click();
    }

    function mostrarImagem(){
        return URL.createObjectURL(imagem)
    }
    

    // useEffect(() => {
    //     const usuarioLogado = storage('usuario-logado');
    //     setUsuario(usuarioLogado.nome)
    // }, [])

    return(

        <main className='categoria'>

            <Lateral/>

            <section className='pag-centro'>

                <div className='cabecalho-centro'>
                    <h1>CADASTRO DE CATEGORIA</h1>
                </div>

                <div className='meio'>

                    <div className='caixas'>
                        <div className='nome'>
                            <h2>Nome: </h2>
                            <input type = "text" value={nome} onChange={e => setNome(e.target.value)}/>
                        </div>

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

                        <button onClick={salvarCLick}>CADASTRAR CATEGORIA</button>

                    </div>
                
                </div>


            </section>


        </main>



    )

}