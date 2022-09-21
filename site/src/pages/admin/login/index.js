import './index.scss'
import '../../common/index.scss'

export default function Index() {

    return(
        <main className='loginAdm'>
            <header className='cabecalho'>Logo</header>

            <section className ='principal'>

                <div className ='login'>

                    <h1>LOGAR NO SISTEMA</h1>
                    <h3>EMAIL:</h3>
                    <input class="box" type="text"/>
                    <h3>SENHA:</h3>
                    <input class="box" type="text"/>
                    <button>ENTRAR</button>
                </div>

            </section>
        </main>

    )
}