import storage from 'local-storage'

import { useNavigate } from 'react-router-dom'

import '../../pages/common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Lateral() {

    const [usuario, setUsuario] = useState('-');


    useEffect(() => {
        if (!storage('usuario-logado')) {
            navigate('/')
        }
        else{
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome);
        }
    }, [])

    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/')
    }

    return(

        
            <div className='esquerda'>
                <div className='lista'>
                    <h3>{usuario}</h3>
                    <hr/>
                    <Link className="links" to="/categoria"> Categoria </Link>
                    <hr/>
                    <Link className="links" to="/servico"> Serviço </Link>
                    <hr/>
                    <Link className="links" to="/consultar"> Consultar Serviço</Link>
                    <hr/>
                    <Link className="links" to="/consultarcategoria"> Consultar Categoria </Link>
                    <hr/>
                    <Link className="links" to="/agenda"> Agenda </Link>
                    <hr/>
                </div>
                <div>
                    <button onClick={sairClick}>Sair</button>
                </div>
            </div>

        )
}
