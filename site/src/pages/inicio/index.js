//import axios from 'axios'
//import { useNavigate } from 'react-router-dom'

//import storage from 'local-storage'
//import LoadingBar from 'react-top-loading-bar'
//import { useState, useRef } from 'react'

//import '../../common/index.scss'

import './index.scss'
import adm from '../../images/icon-adm.png'

export default function Index() {
    

    return(

        <main className='inicio-adm'>

            <section className ='principal'>

                <div className ='entradas'>

                    <div className='adm'> 
                    <img src='../../images/icon-adm.png'/>
                    </div>

                    <div className='cliente'> 
                    <img src='../../images/icon-adm.png'/>
                    </div>

                </div>

                <button className='botao '> Voltar</button>

            </section> 

           
        </main>

    )
}

