import '../../common/index.scss'
import './index.scss'

import Lateral from '../../../componets/lateral/index.js'

import recusar from '../../../images/xis.png'
import aceitar from '../../../images/check.png'


export default function Index(){



    return(
        <main className='agenda'>
            <Lateral />

            <section className='pag-centro'>

                <div className='cabecalho-centro'>
                    <h1>Agenda</h1>
                </div>

                <div className='meio'>
                 
                        <div className='busca'>
                            <input placeholder='Busca por data' type = "text"/>
                        </div>

                    <div className='caixas'>



                            <div className='card'>

                                <div className='head-card'>

                                    <h3>Nome de nome</h3>
                                    <h3>Serviço</h3>
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
                                    <div className='right-foot'>
                                        <img src={aceitar} alt="imagem" width="40px" height="30px" />
                                        <img className='xis' src={recusar} alt="imagem" width="40px" height="40px" />
                                    </div>

                                </div>

                            </div>

                            <div className='card'>

                                <div className='head-card'>

                                    <h3>Nome de nome</h3>
                                    <h3>Serviço</h3>
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
                                    <div className='right-foot'>
                                        <img src={aceitar} alt="imagem" width="40px" height="30px" />
                                        <img className='xis' src={recusar} alt="imagem" width="40px" height="40px" />
                                    </div>

                                </div>

                            </div>

                        </div>
   
                </div>


            </section>

        </main>
    )
}