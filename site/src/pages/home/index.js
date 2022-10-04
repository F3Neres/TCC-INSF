import './index.scss';
import { Link } from 'react-router-dom'


export default function Index() {

    return (
        <main className='page-home'>

            <section class='faixa1'>

            <div class='endereco'>R. Café Natal,235 - Vila Natal - São Paulo - SP  |  (11) 98492-6704</div>

            </section>

            <header class='head'>
                <Link to='/'> <img class='logo'  src='/images/logo.png' alt=''/> </Link>
                
        
            </header>


          
            
        </main>


    )


}