
import '../common/index.scss'
import './index.scss';
import { Link } from 'react-router-dom'
export default function Index() {

    return (
        <main className='page-contato'>

            <section class='faixa-1'>

                <div class='endereco'>R. Café Natal,235 - Vila Natal - São Paulo - SP  |  (11) 98492-6704</div>

            </section>

            <section className='faixa-2'>
                <div> 
                <Link to='/home'> <img class='logo'  src='/src/images/logo.png' alt=''/> </Link>
                </div>

                <div className='serviços'>
                <Link to=''> Serviços </Link>
                <Link to=''> Contato </Link>
                <Link to='/'> Login </Link>
                </div>
            
            </section>

            <section className='faixa-3'>
                <div>
                   <p className='p1'> serviços</p>
                    </div> 
                
                <div>
                <Link to='home'> home</Link>
                <p className='p2'>serviços</p>
                </div>

            </section>


            </main>
    )
}
