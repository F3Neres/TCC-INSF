
import '../../../common/index.scss'
import { Link } from 'react-router-dom'
import lavagem from '../../../../images/lavagens-servico.png'
import lavagens from '../../../../images/img-lavagens.png'
import lavagens2 from '../../../../images/img-lavagens2.png'
import lavagens3 from '../../../../images/img-lavagens3.png'


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

                    <p className='p2'> Em todas as lavagens realizadas o acabamento é padrão.</p>
                        <br></br>
                    <p className='p3'>  Secagem, Vidros, Pretinho nos pneus. Aspiração, Biodiesel nos para-barros, Cantos de portas, Limpeza de painéis e Silicone.
                        Diferencia-se apenas no processo de lavagem onde alguns produtos são acrescentados.</p>
                       
                    <p className='p4'> As lavagem são feitas com shampoo a base de cera de carnauba,ecologicamente correto e nao agride o meio ambiente.</p>
                </div>
           
                

            </section>

            
            <br />
            

                <section class='faixa3'>
                <div className='img2'>
                    <img src={lavagens} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos2'>

                    <div>
                        <h1 className='t3'>Lavagem Simples</h1>
                        <hr />
                        <p  className='p5'> Lavagem com shampoo neutro e acabamento interno padrão de todas as lavagens.</p>
                    </div>
              
                </div>
           
                

            </section>

            <section class='faixa4'>

                <div className='img3'>
                    <img src={lavagens2} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos3'>

                    <div>
                        <h1 className='t4'>  Lavagem com resina</h1>
                        <hr />
                        <p  className='p6'> Finalidade: Brilho e proteção à pintura. A resina não é solúvel em água (a base de látex não sai com chuva) durando muito mais do que qualquer outra cera disponível no mercado.</p>
                    </div>
     
                </div>


            </section>

            <section class='faixa5'>
                
                <div className='img4'>
                    <img src={lavagens3} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos4'>

                    <div>
                        <h1 className='t5'>  Lavagem com brancol </h1>
                        <hr />
                        <p  className='p7'> Finalidade: Indicado para carro branco. O Brancol tem uma ação que remove manchas de “encardido” do branco, manchas de graxa. O carro sai o mais branco possível em uma lavagem.</p>
                    </div>
     
                </div>


            </section>


            <Link to='/home/serviço'> <button className='botao1'> Voltar para Serviços </button> </Link>

            <br />
            
        </main>


    )


}