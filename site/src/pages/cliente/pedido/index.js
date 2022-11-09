import './index.scss';
import '../../common/index.scss'
import { Link } from 'react-router-dom'



//IMPORTAÇÃO DE FONTE
//site: https://fonts.google.com/
//<Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
//<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
//<Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>




export default function Index() {

    return (

        
        <main className='page-pedido'>
            
            <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
            <Link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet"></Link>

            <section class='faixa1'>

                <h1 class='t1'> ACOMPANHAMENTO DE PEDIDO </h1>

            </section>

            <section className='faixa2'> 

                <h1 className='t2'> SERVIÇOS </h1>

            </section>

            <div className='faixa3'> 

                <div className='card'>

                    <div className='head-card'>

                        <h3>Nome de nome</h3>
                        <h3>Valor</h3>

                    </div>

                    <hr className='line-card'/>

                    <div className='info-card'>

                        <div className='left-info'>
                            <h3 className='info-text'>HORÁRIO: XX:XX</h3>
                            <h3 className='info-text'>DATA: XX/XX</h3>
                        </div>

                        <div className='right-info'>
                            <h2 className='info-text'>FORMA DE PAGAMENTO</h2>
                            <h3 className='info-text'>CARTÃO: VISA *********XXX</h3>
                        </div>

                    </div>

                    <div className='foot-card'>

                        <div className='left-foot'>
                            <h2 className='info-text'>STATUS DO PEDIDO: XXXXXXXXX</h2>
                        </div>

                    </div>

                </div>     

                <div className='card'>

                    <div className='head-card'>

                        <h3>Nome de nome</h3>
                        <h3>Valor</h3>

                    </div>

                    <hr className='line-card'/>

                    <div className='info-card'>

                        <div className='left-info'>
                            <h3 className='info-text'>HORÁRIO: XX:XX</h3>
                            <h3 className='info-text'>DATA: XX/XX</h3>
                        </div>

                        <div className='right-info'>
                            <h2 className='info-text'>FORMA DE PAGAMENTO</h2>
                            <h3 className='info-text'>CARTÃO: VISA *********XXX</h3>
                        </div>

                    </div>

                    <div className='foot-card'>

                        <div className='left-foot'>
                            <h2 className='info-text'>STATUS DO PEDIDO: XXXXXXXXX</h2>
                        </div>

                    </div>

                </div>     
            </div>

            <Link to='/cliente/principal'> <button className='botao1'> VOLTAR PARA PÁGINA PRINCIPAL</button> </Link>
            
        </main>

)


}