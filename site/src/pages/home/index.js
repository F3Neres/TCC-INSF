import './index.scss';
import '../common/index.scss'
import { Link } from 'react-router-dom'
import combo1 from '../../images/img-combo1.png'
import combo2 from '../../images/img-combo2.png'
import combo3 from '../../images/img-combo3.png'
import combo4 from '../../images/img-combo4.png'
import cuidados1 from '../../images/img-cuidadoexternas.png'
import cuidados2 from '../../images/img-cuidadosextras.png'

import cuidados3 from '../../images/img-cuidadosinternos.png'
import somos from '../../images/img-quemsomos.png'
import logo from '../../images/logo.png'

import Cabecalho from '../../componets/cabecalho/index.js'


// https://wallpaperscraft.com/catalog/cars


export default function Index() {

    return (
        <main className='page-home'>

            <Cabecalho/>

            <section className='faixa-3'>
                <div className='texto'>
                    <p className='P1'>ESTÉTICA COMPLETA DO SEU VEICULO</p>
                    <p className='P1'>PACOTES COM ATÉ 10% DE DESCONTO</p>
                    <p className='P1-P2'>SORTEIOS</p>
                
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
                        <button className='b2'>contato</button>                
                </div>    
            

            </section>  


                <section className='faixa-5'>
                    
                    <div className='titulo'>
                    
                        <h1 className='t1'>NOSSOS COMBOS</h1>
                    </div>

                    <div className='imagens1'>
                        <img src={combo1} alt="imagem" width="300em" height="300em" />
                        <img src={combo2} alt="imagem" width="300em" height="300em" />
                        <img src={combo3} alt="imagem" width="300em" height="300em" />
                        <img src={combo4} alt="imagem" width="300em" height="300em" />
                    </div>

                    <hr/>

                    
                    <div className='titulo2'>
                        <h1 className='t2'>NOSSOS SERVIÇOS ESPECIALIZADOS</h1>
                        <p className='p5'>SAIBA UM POUCO MAIS SOBRE O QUE FAZEMOS AQUI</p>
                     
                    </div>

                    <div className='imagem2'>
                    
                        <img src={cuidados1} alt="imagem" width="300em" height="300em" />
                        <img src={cuidados2} alt="imagem" width="300em" height="300em" />
                        <img src={cuidados3} alt="imagem" width="300em" height="300em" />
                        
                  
                    </div>

                     <hr/>

                    <div className='faixa-6'>

                        <h1 className='t6'>QUEM SOMOS NÓS</h1>

                        <div className='bloco6'> 
                            <div className='imagens6'>
                                <img src={somos} alt="imagem" width="600em" height="596em" />
                            </div>

                            <div className='somos'>
                                <p className='começo'>Desde o início, em 2007, nosso propósito sempre foi ir além da lavagem de veículos. Eu sabia que poderíamos chegar longe. Sempre acreditei que o que eu procurava como cliente (comprometimento, qualidade e excelência) seria o meu diferencial como empreendedor. No Premiere Lava-rápido, a qualidade é reconhecida nos detalhes e seu veículo é entendido como único. Aqui, você conta com uma gama de soluções em estética automotiva e garantimos o melhor serviço possível. Venha se surpreender com o nosso trabalho!
                                Esperamos por você.</p>
                            </div>
                        </div>                  

                    </div>

                </section>
           
               <hr/>

                <section className='rodape'>
                    
                    <div className='caixa-1'>
                        <p>O GORILACARDENAIL tem como objetivo atender da melhor forma possível
                             seus clientes, buscando todas as soluções em estética automotiva 
                             focando sempre na qualidade e fidelização de seus clientes.</p>
                    </div>

                    <div className='caixa-1'>
                        <h2>Links</h2>
                        <p>Fale Conosco</p>
                        <p>Serviços</p>
                    </div>

                    <div className='caixa-1'>
                        <h2>Onde Estamos?</h2>
                        <h2>R. Café Natal,235 - Vila Natal - São Paulo - SP  </h2>
                        <h2>Segunda a Sexta: 9h às 18hDomingo: FechadoSabados:8h às 13h</h2>
                    </div>

                    <div className='caixa-1'>
                        <h2>Contatos</h2>
                        <h2>(11) 98765-5431</h2>
                    </div>


                </section>    
 

         
            
        </main>


    )


}

