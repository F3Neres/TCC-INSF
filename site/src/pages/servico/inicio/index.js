import './index.scss';
import '../../common/index.scss'
import { Link } from 'react-router-dom'
import servico from '../../../images/serviço-home.png'
import lavagem from '../../../images/lavagens-servico.png'
import higienizações from '../../../images/higienizacao-servico.png'
import renovaçãopintura from '../../../images/renovacaopintura-servico.png'

import Cabecalho from '../../../componets/cabecalho/index.js'


export default function Index() {

    return (
        <main className='page-servico'>

            <Cabecalho/>

            <section className='faixa-3'>

                <img src={servico} alt="imagem" width="100%" height="260px" />
                    
            </section>

            <section className='faixa-4'>

                <div>
                    <img src={lavagem} alt="imagem" width="90%" height="50%" />
                    <h1 className='t1'> Lavagens</h1>
                    <p className='p1'> Acabamento Padrão, secagem, vidros,
                        <br></br> 
                        pretinho nos pneus, aspiração, biodiesel 
                        <br></br> 
                        nos para-barros, portas, painéis, silicone.</p>

                    <div> 
                        <button><Link to='/servico/lavagem'> SAIBA MAIS </Link></button>
                        <button><Link to='/home/inicio'> Agende Conosco </Link></button>
                    </div>
                        
                    
                </div>

                <div>
                    <img src={higienizações} alt="imagem" width="90%" height="50%"  />
                    <h1 className='t2'> Higienização Interna</h1>
                    <p className='p2'> Realizamos os serviços de limpeza interna
                        <br></br> 
                        com a maior qualidade e conhecimento
                        <br></br> 
                        oferecida no mercado.</p>
                    <div> 
                        <button><Link to='/servico/higienizacao'> SAIBA MAIS </Link></button>
                        <button><Link to='/home/inicio'> Agende Conosco </Link></button>
                    </div>
                </div>

                <div>
                    <img src={renovaçãopintura} alt="imagem" width="90%" height="50%"  />
                    <h1 className='t3'> Renovação de Pintura</h1>
                    <p className='p3'> Para quem deseja manter seu carro com a
                        <br></br> 
                        pintura melhor conservada ou para quem
                        <br></br> 
                        deseja recuperar a pintura do veículo.</p>
                    <div> 
                        <button><Link to='/servico/renovacaopintura'> SAIBA MAIS </Link></button>
                        <button><Link to='/home/inicio'> Agende Conosco </Link></button>  
                    </div>
                </div>

                  

            </section>



               <br></br>
               <br></br>
               <br></br>



            
        </main>


    )


}

