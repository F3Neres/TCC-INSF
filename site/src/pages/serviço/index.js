import './index.scss';
import '../common/index.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import servico from '../../images/serviço-home.png'
import lavagem from '../../images/lavagens-servico.png'
import higienizações from '../../images/higienizacao-servico.png'
import renovaçãopintura from '../../images/renovacaopintura-servico.png'




export default function Index() {

    return (
        <main className='page-servico'>

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

                    <img src={servico} alt="imagem" width="100%" height="260px" />
                    
                </section>

                <section className='faixa-4'>

                    <div>
                        <img src={lavagem} alt="imagem" width="530px" height="298px" />
                        <h1 className='t1'> Lavagens</h1>
                        <p className='p1'> Acabamento Padrão, secagem, vidros,
                            <br></br> 
                            pretinho nos pneus, aspiração, biodiesel 
                            <br></br> 
                            nos para-barros, portas, painéis, silicone.</p>

                        <button>
                        <Link to='/home/inicio'> Agende Conosco </Link>
                        </button>
                    
                    </div>

                    <div>
                        <img src={higienizações} alt="imagem" width="530px" height="298px" />
                        <h1 className='t2'> Higienização Interna</h1>
                        <p className='p2'> Realizamos os serviços de limpeza interna
                            <br></br> 
                            com a maior qualidade e conhecimento
                            <br></br> 
                            oferecida no mercado.</p>
                        <button>
                        <Link to='/home/inicio'> Agende Conosco </Link>
                        </button>
                    </div>

                    <div>
                        <img src={renovaçãopintura} alt="imagem" width="530px" height="298px" />
                        <h1 className='t3'> Renovação de Pintura</h1>
                        <p className='p3'> Para quem deseja manter seu carro com a
                            <br></br> 
                            pintura melhor conservada ou para quem
                            <br></br> 
                            deseja recuperar a pintura do veículo.</p>
                        <button>
                        <Link to='/home/inicio'> Agende Conosco </Link>
                        </button>
                    </div>

                  

                </section>



               <br></br>
               <br></br>
               <br></br>



            
        </main>


    )


}

