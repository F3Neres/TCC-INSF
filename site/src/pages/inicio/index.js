//import axios from 'axios'
//import { useNavigate } from 'react-router-dom'

//import storage from 'local-storage'
//import LoadingBar from 'react-top-loading-bar'
//import { useState, useRef } from 'react'

import '../common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'

import adm from '../../images/adm.png'
import cliente from '../../images/cliente.png'

export default function Index() {
    

    return(

        <main className='inicio-adm'>

            <section className ='principal'>

                <div className ='entradas'>

                <Link className="links" to="/Ladmin"><div className='adm'> 
                        <img src={adm} alt="imagem" width="95%" height="95%" />
                    </div></Link>

                    <Link className="links" to="/login/cliente"><div className='cliente'> 
                        <img src={cliente} alt="imagem" width="80%" height="80%" />
                    </div></Link>

                </div>


                <Link className="links" to="/"><button className='botao '> Voltar</button></Link>

            </section> 

           
        </main>

    )
}

