import './index.scss';
import '../../pages/common/index.scss'


import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import storage from 'local-storage';



import recusar from '../../images/xis.png'



export default function Carrinho ({item: { servico: {info}, qtd }, removerItem }) {


    function remover(){
        removerItem(info.id)
    }

    return(

            <div className='card'>  

                    <div className='head-card'>

                        <h3>{info.servico}</h3>
                        <h3>R$ {info.valor}</h3>
                        <img onClick={remover} className='xis' src={recusar} alt="imagem" width="40px" height="40px" />

                    </div>
                    
                </div>



    )
}