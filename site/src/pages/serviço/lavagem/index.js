import './index.scss';
import '../../common/index.scss'
import { Link } from 'react-router-dom'
import lavagem from '../../../images/lavagens-servico.png'
import lavagens from '../../../images/img-lavagens.png'
import lavagens2 from '../../../images/img-lavagens2.png'
import lavagens3 from '../../../images/img-lavagens3.png'


//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    return (

        
        <main className='page-lavagem'>
            
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

            <section class='faixa1'>

                <h1 class='t1'> LAVAGENS </h1>

            </section>

            <section class='faixa2'>
                
                <div className='imagem1'> 
                    <img src={lavagem} alt="imagem" width="654px" height="395px" />
                </div>
                
                <div className='textos'>
                    <h1 className='t2'>Acabamento padrão em todas as lavagens. </h1>

                    <p  className='p2'> Em todas as lavagens realizadas o acabamento é padrão.</p>
                        <br></br>
                      <p className='p3'>  Secagem, Vidros, Pretinho nos pneus. Aspiração, Biodiesel 
                        <br></br> 
                        nos para-barros, Cantos de portas, Limpeza de painéis e Silicone.
                        <br></br>
                        Diferencia-se apenas no processo de lavagem onde alguns produtos são acrescentados.</p>
                        <br></br>
                       
                       <p className='p4'> As lavagem são feitas com shampoo a base de cera de carnauba, ecologicamente correto e nao agride o meio ambiente.</p>
                </div>
           
                

            </section>
              <br />
            

                <section class='faixa3'>
                <div className='img2'>
                    <img src={lavagens2} alt="imagem" width="554px" height="305"  />
                </div>
                <div className='textos2'>

                    <div>
                        <h1 className='t3'>Lavagem Simples</h1>
                        <hr />
                        <p  className='p5'> Lavagem com shampoo neutro e acabamento interno padrão de todas as lavagens.</p>
                    </div>
                    <button className='bot1'>ADICIONAR SERVIÇO</button>
                     
                       
                     
                </div>
           
                

            </section>

            <section class='faixa4'>
                <div className='img3'>
                    <img src={lavagens} alt="imagem" width="554px" height="305"  />
                </div>
                <div className='textos3'>

                    <div>
                        <h1 className='t4'>  Lavagem com resina</h1>
                        <hr />
                        <p  className='p6'> Finalidade: Brilho e proteção à pintura. A resina não é solúvel em água (a base de látex não sai com chuva) durando muito mais do que qualquer outra cera disponível no mercado.</p>
                    </div>
                    <button className='bot2'>ADICIONAR SERVIÇO</button>
                     
                       
                     
                </div>
           
                

            </section>




               



            
        </main>


    )


}

