import './index.scss';
import '../../common/index.scss'
import { Link } from 'react-router-dom'
//import lavagens from '../../../images/lavagens-servico.png'

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
                  
                </div>
                
                <div>
                    <h1>Acabamento padrão em todas as lavagens. </h1>
                    <p> Em todas as lavagens realizadas o acabamento é padrão.
                        Secagem, Vidros, Pretinho nos pneus. Aspiração, Biodiesel nos para-barros, Cantos de portas, Limpeza de painéis e Silicone.
                        Diferencia-se apenas no processo de lavagem onde alguns produtos são acrescentados.
                        <br> </br>
                        As lavagem são feitas com shampoo a base de cera de carnauba, ecologicamente correto e nao agride o meio ambiente.</p>
                </div>
                

            </section>

               



            
        </main>


    )


}

