import '../../pages/common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'


export default function lateral(){


    return(

        
            <div className='esquerda'>
                <div className='lista'>
                    <h3>Milena</h3>
                    <hr/>
                    <Link className="links" to="/categoria"> Categoria </Link>
                    <hr/>
                    <Link className="links" to="/servico"> Serviço </Link>
                    <hr/>
                    <Link className="links" to="/consultar"> Consultar </Link>
                    <hr/>
                    <Link className="links" to="/agenda"> Agenda </Link>
                    <hr/>
                </div>
                <div>
                    <button>Sair</button>
                </div>
            </div>

        )
}
