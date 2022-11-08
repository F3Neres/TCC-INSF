import './index.scss';
import '../../common/index.scss'
import { Link } from 'react-router-dom'
import lavagem from '../../../images/lavagens-servico.png'
import higienizações from '../../../images/higienizacao-servico.png'
import renovaçãopintura from '../../../images/renovacaopintura-servico.png'


//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    return (

        
        <main className='page-cliente'>
            
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

            <section class='faixa1'>

                <h1 class='t1'> AGENDAMENTO DE SERVIÇOS </h1>

            </section>


            <section className='faixa-4'>

                <div>
                    <h1 className='t2'> Lavagens</h1>
                    <img src={lavagem} alt="imagem" width="530px" height="298px" />
                    <div> 
                        <button className='b1'><Link to='/descricao/lavagens'> SAIBA MAIS </Link></button>
                    </div>
                        
                    
                </div>

                <div>
                    <h1 className='t3'> Higienização Interna</h1>
                    <img src={higienizações} alt="imagem" width="530px" height="298px" />
                    <div> 
                        <button className='b2'><Link to='/descricao/higienizacoes'> SAIBA MAIS </Link></button>
                    </div>
                </div>

                <div>
                    <h1 className='t4'> Renovação de Pintura</h1>
                    <img src={renovaçãopintura} alt="imagem" width="530px" height="298px" />
                    <div> 
                        <button className='b3'><Link to='/descricao/renovacaopintura'> SAIBA MAIS </Link></button>  
                    </div>
                </div>

                

            </section>

        </main>


    )


}


