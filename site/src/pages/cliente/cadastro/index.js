import '../../common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'


export default function Index(){




    return(

        <main className='cadastroCliente'>
            
            <Link className="links" to="/home/inicio"><button className='botao '> Voltar</button></Link>

            <section className='principal'>

                <section className='cadastro'>   

                    <div className='meio'>
                        <div className='left'>
                            <h2>Nome completo*</h2>
                            <input class="box" type="text"/>
                            <hr/>

                            <h2>Nome do usuario*</h2>
                            <input type="text"/>
                            <hr/>

                            <h2>Email*</h2>
                            <input type="text"/>
                            <hr/>

                            <h2>Senha*</h2>
                            <input type="password"/>
                            <hr/>
                        </div>

                        <div className='right'>
                            <h2>CPF*</h2>
                            <input type="text"/>
                            <hr/>

                            <h2>Telefone*</h2>
                            <input type="text"/>
                            <hr/>

                            
                        
                        </div>

                        
                    </div>

                    <button className='botao-right'> Cadastrar-se </button>
                    
                </section>

            </section>



        </main>


    )
}