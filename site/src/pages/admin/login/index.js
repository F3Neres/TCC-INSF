
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react'

import '../../common/index.scss'
import './index.scss'

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    async function entrarClick(){
        ref.current.continuousStart()
        setCarregando(true);

        try{
            const r = await axios.post('http://localhost:5000/admin/login', {
                email: email,
                senha: senha
            });
            storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/categoria');
            }, 2000);
            

        }catch(err){
            ref.current.complete();
            setCarregando(false);

            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
        
    }

    return(
        <main className='loginAdm'>
            <LoadingBar color='#ff0000' ref={ ref }/>
            <header className='cabecalho'>Logo</header>

            <section className ='principal'>

                <div className ='login'>

                    <h1>LOGAR NO SISTEMA</h1>
                    <h3>EMAIL:</h3>
                    <input class="box" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h3>SENHA:</h3>
                    <input class="box" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                    <h4 className='erro'>{erro}</h4>
                    <button onClick={entrarClick} disabled={carregando}>ENTRAR</button>
                </div>

            </section>
        </main>

    )
}