import './index.scss';
import '../../../common/index.scss'
import { Link } from 'react-router-dom'
import  RenovacaoPintura from '../../../../images/renovacaopintura-servico.png'
import  Enceramento from '../../../../images/enceramento.png'
import  Espelhamento from '../../../../images/espelhamento.png'
import  Protecao from '../../../../images/protecao.png'


//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    return (

        
        <main className='page-renovacao'>
            
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

            <section class='faixa1'>

                <h1 class='t1'> RENOVAÇÃO DA PINTURA </h1>

            </section>

            <section class='faixa2'>
                
                <div className='imagem1'> 
                    <img src={RenovacaoPintura} alt="imagem" width="654px" height="395px" />
                </div>
                
                <div className='textos'>
                    <h1 className='t2'>Realizamos os serviços de renovação de pintura utilizando os melhores produtos disponíveis no mercado.</h1>

                    <p className='p2'> Para manter seu carro com a pintura melhor conservada oferecemos; enceramento, cristalização, espelhamento, entre outros.</p>
                        <br></br>
                
                </div>
           
                

            </section>

            <hr className='line'/>
            

            <section class='faixa3'>
                <div className='img2'>
                    <img src={Enceramento } alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos2'>

                    <div>
                        <h1 className='t3'>Enceramento</h1>
                        <hr />
                        <p  className='p5'>  A finalidade da cera é preencher as irregularidades criadas sobre a superfície pintada pela ação do tempo, reproduzindo o brilho da tinta nova. Por produzir um filme sobre a tinta, protege-a dos ataques.</p>
                        <button className='b1'> Adicionar Serviço </button>
                    </div>
              
                </div>
           
                

            </section>

            <section class='faixa4'>

                <div className='img3'>
                    <img src={Espelhamento} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos3'>

                    <div>
                        <h1 className='t4'> Espelhamento</h1>
                        <hr />
                        <p  className='p6'> Também conhecida como Cristalização de pintura, é o melhor "tratamento de beleza" para o seu carro. Consiste em um sistema especial de polimento para recuperar o brilho e remover riscos superficiais, manchas, oxidação e outros pequenos defeitos na pintura. Cria uma película protetora que garante o brilho perfeito da pintura por até 6 meses ou 20 lavagens</p>
                        <button className='b2'> Adicionar Serviço </button>
                    </div>
     
                </div>


            </section>

            <section class='faixa5'>
                
                <div className='img4'>
                    <img src={Protecao} alt="imagem" width="355px" height="250"  />
                </div>
                <div className='textos4'>

                    <div>
                        <h1 className='t5'> Proteção de Pintura </h1>
                        <hr />
                        <p  className='p7'> Polimento da pintura removendo riscos superficiais e alisando a pintura. Após é aplicado o Cristalizador ressaltando o brilho e criando uma proteção de pintura prolongada. Procedimento realizado em 1 Hora (após a lavagem).</p>
                        <button className='b3'> Adicionar Serviço </button>
                    </div>
     
                </div>


            </section>


            <Link to='/cliente/principal'> <button className='botao1'> Voltar para Página Principal </button> </Link>

            <br />
            
        </main>


    )


}