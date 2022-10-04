import '../../common/index.scss'
import './index.scss'

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

            const r = await cadastrarServico(idCategoria, nome, descricao, valor);

            NovoServico();

        } catch (err) {
            alert(err.message);
        };
    };

    
    useEffect(()=>{
        Categoria();
    },  []);

    
    const uploadImage = async e => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('imagem', imagem);
    }


    return(

        <main className='servico'>

            <div className='esquerda'>

                <h3>Milena</h3>
                <hr/>
                <Link class="links" to="/categoria"> Categoria </Link>
                <hr/>
                <Link class="links" to="/consultar"> Consultar </Link>
                <hr/>

            
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

                        <div className='imagem'>
                            <h2>Imagem</h2>
                            <div className = 'img'>   <input className= 'caixa-img' type = "image"/> </div>
                        </div>

                        <button onClick={Salvar}>CADASTRAR SERVIÇO</button>

                    </div>
                
                </div>


            </section>


        </main>



    )

}