import './index.scss';
import '../common/index.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import contato from '../../images/contato-home.png'





export default function Index() {

    return (
        <main className='page-contato'>

                <section class='faixa1'>

                    <div class='endereco'>R. Café Natal,235 - Vila Natal - São Paulo - SP  |  (11) 98492-6704</div>

                </section>

                <section className='faixa2'>
                    <div> 
                    <Link to='/'> <img src={logo} alt="imagem" width="109px" height="97px" /></Link>
                    </div>

                    <div className='servico'>
                    <Link to='/home/serviço'> Serviços </Link>
                    </div>

                    <div className='contato'>
                    <Link to='/home/contato'> Contato </Link>
                    </div>

                    <div className='login'>
                    <Link to='/home/inicio'> Login </Link>
                     </div>

                </section>

                <section className='faixa-3'>

                    <img src={contato} alt="imagem" width="100%" height="260px" />
                    
                </section>

                <section className='faixa-4'>

                    <div>
                        <div>

                        </div>

                        <div>
                            
                        </div>
                    </div>

                </section>
                                

            
        </main>


    )


}

