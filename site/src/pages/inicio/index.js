//import axios from 'axios'
//import { useNavigate } from 'react-router-dom'

//import storage from 'local-storage'
//import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'

import storage from 'local-storage'

import '../common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'
//import { Link, useResolvedPath } from 'react-router-dom'

import adm from '../../images/adm.png'
import cliente from '../../images/cliente.png'

export default function Index() {

    useEffect(() => {
        if (storage('usuario-logado')){
            storage.remove('usuario-logado')
            // endereço temporario
        }
    })
    

    return(

        <main className='inicio-adm'>

            <section className ='principal'>
            <Link className="links" to="/"><button className='botao '> Voltar</button></Link>

                <div className ='entradas'>

                <Link className="links" to="/Loginadmin"><div className='adm'> 
                        <img src={adm} alt="imagem" width="95%" height="95%" />
                    </div></Link>

                    <Link className="links" to="/login/cliente"><div className='cliente'> 
                        <img src={cliente} alt="imagem" width="80%" height="80%" />
                    </div></Link>

                </div>


            </section> 

           
        </main>

    )
}

