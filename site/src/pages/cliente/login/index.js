import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import '../../common/index.scss'
import './index.scss'

export default function Index() {

    return(
        <main className='loginCliente'>
            

            <section className ='principal'>

                <div className ='login'>
                    

                    <h1>LOGAR NO SISTEMA</h1>
                    <h3>EMAIL:</h3>
                    <input class="box" type="text"/>
                    <h3>SENHA:</h3>
                    <input class="box" type="password"/>
                    <h4 className='erro'></h4>
                    <button>ENTRAR</button>
                </div>

            </section>
        </main>

    )
}