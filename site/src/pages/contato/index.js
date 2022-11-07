import './index.scss';
import '../common/index.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import contato from '../../images/contato-home.png'

import Cabecalho from '../../componets/cabecalho/index.js'





export default function Index() {

    return (
        <main className='page-contato'>

                <Cabecalho/>

                <section className='faixa-3'>

                    <img src={contato} alt="imagem" width="100%" height="260px" />
                    
                </section>

                <section className='faixa-4'>

                    <div>
                        <div>

                        </div>

                        <div>
                            
                        </div>
                    </div>

                </section>
                                

            
        </main>


    )


}

