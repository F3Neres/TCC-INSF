import '../../common/index.scss'
import './index.scss'

import Lateral from '../../../componets/lateral/index.js'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listarCategoria, removerCategoria, buscarCategoriaNome } from '../../../api/listarServico.js';



export default function Index() {

    const [categorias, setCategorias] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [erro, setErro] = useState('');
  

    async function carregarCategorias(){
        const r = await listarCategoria();
        setCategorias(r);
    }


    async function nomeCategoria() {
        const resp = await buscarCategoriaNome (filtroCategoria);
        setCategorias(resp);
    }

   



    useEffect(() => {
        setTimeout(()=>{
            nomeCategoria()
        },100)
    },[filtroCategoria]);


    useEffect(() => {
        carregarCategorias();
    }, []);



    async function deletarCategoria(id){
        try {
            await removerCategoria(id);
            carregarCategorias();
            alert('Categoria removido');

        } catch(err){


            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    return(

        <main className='consultar'>


            <Lateral />

        <section className='pag-centro'> 

            <div className='cabecalho'>
                <h1>CONSULTAR SERVIÇOS</h1>
            </div>

            <div className='meio'>

                <table className='tabela1'>
                    <tr className='linha2'>
                        <td> Categoria:</td>
                        <td><input type = "text" value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)} /></td>
                    </tr>

                </table>


                <table className='tabela2'>

                    <thead>
                        <tr className='linha4'>
                            <td className='id'> ID </td>
                            <td> Categoria </td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                    {categorias.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.categoria}</td>
                            <td><button onClick={() => deletarCategoria(item.id)}>X</button></td>
                        </tr>
                    )}
                    </tbody>

                </table>

                <button className='botao2'> Voltar </button>

            </div>

           
         </section>

    </main>

    )

}
