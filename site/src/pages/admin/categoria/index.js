import '../../common/index.scss'
import './index.scss'

import { cadastrarCategoria, imagemCategoria } from '../../../api/cadastrarCategoria'

import storage from "local-storage"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Index() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');

    async function salvarCLick(){
        try {
            const r = await cadastrarCategoria(nome, descricao)

            alert('Categoria cadastrada');
        } catch (err) {
            alert(err.message);
        }

    }

    

    // useEffect(() => {
    //     const usuarioLogado = storage('usuario-logado');
    //     setUsuario(usuarioLogado.nome)
    // }, [])

    return(

        <main className='categoria'>

            <div className='esquerda'>

                <h3>Milena</h3>
                <hr/>
                <Link class="links" to="/servico"> Serviço </Link>
            
            </div>

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

                        <div className='imagem'>
                            <h2>Imagem</h2>
                            <div className = 'img'>   <input className= 'caixa-img' type = "image"/> </div>
                        </div>

                        <button onClick={salvarCLick}>CADASTRAR CATEGORIA</button>

                    </div>
                
                </div>


            </section>


        </main>



    )

}