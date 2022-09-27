import '../../common/index.scss'
import './index.scss'

import { cadastrarServico, imagemServico } from '../../../api/cadastrarServico'
import { listarCategoria } from '../../../api/cadastrarCategoria'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Index() {

    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);


    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [valor, setValor] = useState(0);

    const [catSelecionadas, setCatSelecionadas] = useState([]);

    async function salvarCLick(){
        try {
            const r = await cadastrarServico(categorias, nome, descricao, valor);

            alert('Serviço cadastrada');
        } catch (err) {
            alert(err.message);
        }

    }
    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }
    function adicionarCategoria() {
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }



    async function listar() {
        const resposta = await listarCategoria();
        setCategorias(resposta);
    }




    return(

        <main className='servico'>

            <div className='esquerda'>

                <h3>Milena</h3>
                <hr/>
                <Link class="links" to="/categoria"> Categoria </Link>

            
            </div>

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
                            <input type = "text" value={valor} onChange={e => setValor(e.target.value)}/>
                        </div>

                        <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                            <option selected disabled hidden>Selecione</option>

                            {categorias.map(item =>
                                <option value={item.id}> {item.categoria} </option>
                            )}
                        </select>

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

                        <button onClick={salvarCLick}>CADASTRAR SERVIÇO</button>

                    </div>
                
                </div>


            </section>


        </main>



    )

}