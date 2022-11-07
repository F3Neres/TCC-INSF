import '../../pages/common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'


export default function Cabecalho(){




    return(

        <header>

            <section class='faixa1'>

                <div class='endereco'>R. Café Natal,235 - Vila Natal - São Paulo - SP  |  (11) 98492-6704</div>

            </section>
 
            <section className='faixa2'>

                <div> 
                    <Link to='/'> <img src={logo} alt="imagem" width="109px" height="97px" /></Link>
                </div>

                <div className='links'>

                    <div className='servico'>
                        <Link to='/home/servico'> Serviços </Link>
                    </div>

                    <div className='contato'>
                        <Link to='/home/contato'> Contato </Link>
                    </div>

                    <div className='login'>
                        <Link to='/home/inicio'> Login </Link>
                    </div>

                </div>
            </section>
            
        </header>


    )
}