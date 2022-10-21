import './index.scss';
import '../common/index.scss'
import { Link } from 'react-router-dom'

// https://wallpaperscraft.com/catalog/cars


export default function Index() {

    return (
        <main className='page-home'>

            <section class='faixa1'>

                <div class='endereco'>R. Café Natal,235 - Vila Natal - São Paulo - SP  |  (11) 98492-6704</div>

            </section>
 
            <section className='faixa2'>
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
                <div className='texto'>
                    <p className='P1'>ESTÉTICA COMPLETA DO SEU VEICULO</p>
                    <p className='P1'>PACOTES COM ATÉ 10% DE DESCONTO</p>
                    <p className='P1 P2'>SORTEIOS</p>
                
                </div>

                <div className='BOTOES'>   
                    <div>
                        <button className='b1'> A GORILACARDETAIL</button>
                        <button className='b1'> LOCALIZAÇÃO</button>
                    </div>
                </div>
            </section>
 
            <section className='faixa-4'>
                <div className='textos'>
                    <p className='P2'>Nós oferecemos o melhor serviço para manter o seu carro sempre pronto para um bom passeio ou um dia de trabalho </p>
                    <p className='P3'>Entre em contato conosco e venha nos conhecer!</p>
                 </div>
                 <div className='BOTAO'>   
                    <div>
                        <button className='b2'>contato</button>
                    </div>
            </div>    
            </section>

            <section className='faixa-5'>
                <div className='textos'>
                    <p className='P2'>Nós oferecemos o melhor serviço para manter o seu carro sempre pronto para um bom passeio ou um dia de trabalho </p>
                    <p className='P3'>Entre em contato conosco e venha nos conhecer!</p>
                 </div>
                 <div className='BOTAO'>   
                    <div>
                        <button className='b2'>contato</button>
                    </div>
            </div>    
            </section>
                
         
            
        </main>


    )


}