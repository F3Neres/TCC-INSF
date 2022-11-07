import './index.scss';
import '../../common/index.scss'
import { Link } from 'react-router-dom'
import  Higienizacao from '../../../images/higienizacao-servico.png'
import  Bancodecouro from '../../../images/higienizacao-bancosdecouro.png'
import  Bancodecouro2 from '../../../images/higienizacao-bancosdecouro2.jpg'
import  Higienizacaocompleta from '../../../images/higienizacaocompleta.jpg'


//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    return (

        
        <main className='page-higienizacao'>
            
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

            <section class='faixa1'>

                <h1 class='t1'> HIGIENIZAÇÕES </h1>

            </section>

            <section class='faixa2'>
                
                <div className='imagem1'> 
                    <img src={Higienizacao} alt="imagem" width="654px" height="395px" />
                </div>
                
                <div className='textos'>
                    <h1 className='t2'>Realizamos os serviços de limpeza interna com a maior qualidade e conhecimento oferecida no mercado.</h1>

                    <p className='p2'> Realizamos os serviços de limpeza interna completa: bancos, laterais, teto, painéis e carpete.</p>
                        <br></br>
                
                </div>
           
                

            </section>

    

            
            <br />
            

                <section class='faixa3'>
                <div className='img2'>
                    <img src={Higienizacaocompleta} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos2'>

                    <div>
                        <h1 className='t3'>Higienização Completa</h1>
                        <hr />
                        <p  className='p5'>Higienização Completa: bancos, laterais, teto, painéis e carpete</p>
                    </div>
              
                </div>
           
                

            </section>

            <section class='faixa4'>

                <div className='img3'>
                    <img src={Bancodecouro} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos3'>

                    <div>
                        <h1 className='t4'> Higienização de Bancos de Couro</h1>
                        <hr />
                       
                    </div>
     
                </div>


            </section>

            <section class='faixa5'>
                
                <div className='img4'>
                    <img src={Bancodecouro2} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos4'>

                    <div>
                        <h1 className='t5'> Hidratação de Bancos de Couro</h1>
                        <hr />
                    
                    </div>
     
                </div>


            </section>


            <Link to='/home/serviço'> <button className='botao1'> Voltar para Serviços </button> </Link>

            <br />
            
        </main>


    )


}


