import '../../common/index.scss'
import './index.scss'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Index() {

    return(

        <main className='consultar'>

            <div className='esquerda'>

                <h3>Milena</h3>
                <hr/>
                <Link class="links" to="/servico"> Serviço </Link>
                <hr/>
                <Link class="links" to="/categoria"> Categoria </Link>
                <hr/>
            
            </div>

        <section className='pag-centro'> 

            <div className='cabecalho'>
                <h1>CONSULTAR SERVIÇOS</h1>
            </div>

            <div className='meio'>

                <table className='tabela1'>
                    <tr className='linha1'>
                        <td>Serviço:</td>
                        <td><input type = "text" value='' /></td>
                    </tr>
                    <tr className='linha2'>
                        <td> Categoria:</td>
                        <td><input type = "text" value='' /></td>
                    </tr>
                    <tr className='linha3'>
                        <td> Valor:</td>
                        <td><input type = "text" value='' /></td>
                    </tr>
                </table>

                <button className='botao1'> Pesquisar </button>

                <table className='tabela2'>
                    <tr className='linha4'>
                        <td className='id'> ID </td>
                        <td> Categoria </td>
                        <td> Serviço </td>
                        <td> Valor </td>
                    </tr>
                </table>

                <button className='botao2'> Voltar </button>

            </div>

           
         </section>

    </main>

    )

}
