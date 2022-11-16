import './index.scss';
import '../common/index.scss'
import { Link } from 'react-router-dom'
import localizacao from '../../images/icon-localizacao.png'
import telefone from '../../images/icon-telefone.png'
import contato from '../../images/contato-home.png'

import Cabecalho from '../../componets/cabecalho/index.js'





export default function Index() {

    return (
        <main className='page-contato'>
  
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

                <Cabecalho/>

                <section className='faixa-3'>

                    <img src={contato} alt="imagem" width="100%" height="260px" />
                    
                </section>

                <section className='faixa-4'>

                    <div className='blocos-f4'>

                        <div className='bloco1'>
                            <div className='texto'> 
                                <h1 className='t1'> INFORMAÇÕES </h1>
                            </div>
                            <div className='textos1'>
                                <img src={localizacao} alt="imagem" width="50px" height="30px" />
                                <p className='p1'> R. Café Natal,235 - Vila Natal - São Paulo - SP - 04863-450 </p>
                            </div>
                            <div className='textos2'>
                                <img src={telefone} alt="imagem" width="18px" height="20px" />
                                <p className='p2'> (11) 98492-6704</p>
                            </div>
                        </div>
            

                        <div className='bloco2'>
                            <div className='texto2'> 
                                <h1 className='t2'> HORÁRIO DE FUNCIONAMENTO </h1>
                            </div>
                            <div className='textos3'>
                                <p className='p3'> De Segunda a Sexta: 9h ás 18h</p>
                                <p className='p4'> Domingo: Fechado </p>
                                <p className='p5'> Sabados: 8h ás 13h</p>
                            </div>
                          
                        </div>

                    </div>

                </section>

               
                                

            
        </main>


    )


}

