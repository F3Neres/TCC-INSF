import '../../common/index.scss'
import './index.scss'

import Lateral from '../../../componets/lateral/index.js'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listarCategoria, removerCategoria, buscarServicoNome, buscarCategoriaNome, buscarCategoriaValor } from '../../../api/listarServico.js';



export default function Index() {

    const [categorias, setCategorias] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [filtroServico, setFiltroServico] = useState('');
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroValor, setFiltroValor] = useState( );

    async function carregarCategorias(){
        const r = await listarCategoria();
        setCategorias(r);
    }

    async function nomeServico() {
        const resp = await buscarServicoNome(filtroServico);
        setServicos(resp);
    }

    async function nomeCategoria() {
        const resp = await buscarCategoriaNome (filtroCategoria);
        setServicos(resp);
    }

    async function lisarValor() {
        const resp = await buscarCategoriaValor (filtroValor);
        setServicos(resp);
    }



    useEffect(() => {
        setTimeout(()=>{
            nomeServico()
        },100)
    },[filtroServico]);

    useEffect(() => {
        setTimeout(()=>{
            nomeCategoria()
        },100)
    },[filtroCategoria]);

    useEffect(() => {
        setTimeout(()=>{
            lisarValor()
        },100)
    },[filtroValor]);


    useEffect(() => {
        carregarCategorias();
    }, []);

    async function deletarCategoria(id){
        try {
            await removerCategoria(id);
            carregarCategorias();
            alert('Categoria removido');

        } catch (err) {
            alert(err.message);
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
                    <tr className='linha1'>
                        <td>Serviço:</td>
                        <td><input type = "text" value={filtroServico} onChange={e => setFiltroServico(e.target.value)} /></td>
                    </tr>
                    <tr className='linha2'>
                        <td> Categoria:</td>
                        <td><input type = "text" value={filtroCategoria} onChange={e => setFiltroCategoria(e.target.value)} /></td>
                    </tr>
                    <tr className='linha3'>
                        <td> Valor:</td>
                        <td><input type = "number" value={filtroValor} onChange={e => setFiltroValor(e.target.value)} /></td>
                    </tr>
                </table>


                <table className='tabela2'>

                    <thead>
                        <tr className='linha4'>
                            <td className='id'> ID </td>
                            <td> Categoria </td>
                            <td> Serviço </td>
                            <td> Valor </td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                    {categorias.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.categoria}</td>
                            <td>{item.servico}</td>
                            <td>R${item.valor}</td>
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
