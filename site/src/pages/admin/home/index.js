import './index.scss';

// import { Link } from 'react-router-dom';

import iconadm from '../../../images/icon-adm.png'
import iconcliente from '../../../images/icon-cliente.png'



export default function Index() {

    return (
        <main className='home-adm'>

 
            <section className='faixa1'>
                <div> 
                    <h1>LOGAR NO SISTEMA</h1>
                    
                </div>

            </section>

            <section className='faixa2'>
                
                <div className='bloco1'>
                    <div>
                        <img classname='img-1' src={iconadm} alt="imagem" width="300em" height="300em" />
                    </div>

                    <h2> ADMIN </h2>
                </div>

                <div className='bloco2 '>
                    <div>
                    <img classname='img-2'src={iconcliente} alt="imagem" width="500em" height="360em" />
                    </div>

                    <h3> CLIENTE </h3>
                </div>

            </section>

            


            
         
            
        </main>


    )


}