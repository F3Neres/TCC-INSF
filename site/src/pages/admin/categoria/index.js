import './index.scss'
import '../../common/index.scss'


export default function Index() {

    return(

        <main className='categoria'>

            <div className='esquerda'>

                <h3>Nome adm</h3>
                <hr/>
            
            </div>

            <section className='pag-centro'>

                <div className='cabecalho-centro'>
                    <h1>CADASTRO DE CATEGORIA</h1>
                </div>

                <div className='meio'>

                    <div className='caixas'>
                        <div className='nome'>
                            <h2>Nome: </h2>
                            <input type = "text"/>
                        </div>

                        <div className='descricao'>
                            <h2>Descrição:</h2>
                            <textarea/>
                        </div>

                    </div>

                    <div className='direita'>

                        <div className='imagem'>
                            <h2>Imagem</h2>
                            <div> <img/> </div>
                        </div>

                        <button>CADASTRAR CATEGORIA</button>

                    </div>
                
                </div>


            </section>


        </main>



    )

}