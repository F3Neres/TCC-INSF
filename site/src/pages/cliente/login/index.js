import { logar } from '../../../api/loginCliente.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'

import '../../common/index.scss'
import './index.scss'

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (storage('usuario-logado')){
            navigate('/cliente/principal')
            
        }
    })

    async function entrarClick(){
        ref.current.continuousStart()
        setCarregando(true);

        try{
            const r = await logar(email, senha);

            storage('usuario-logado', r);

            setTimeout(() => {
                navigate('/cliente/principal');
            }, 1500);
            

        }catch(err){
            ref.current.complete();
            setCarregando(false);

            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
        
    }
    

    return(
        <main className='loginCliente'>
            <LoadingBar color='#ff0000' ref={ ref }/>

            <Link className="links" to="/home/inicio"><button className='botao '> Voltar</button></Link>
            

            <section className ='principal'>


                <div className ='login'>
                    

                    <h1>LOGAR NA LOJA</h1>

                    <h3>EMAIL:</h3>
                    <input class="box" type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h3>SENHA:</h3>
                    <input class="box" type="password" value={senha} onChange={e => setSenha(e.target.value)}/>

                    <h4 className='erro'>{erro}</h4>

                    <button className='botaoLogin' onClick={entrarClick} disabled={carregando}>ENTRAR</button>
                    <Link className="LinkCad" to="/cadastro"><button className='botaoCadastro '> CADASTRAR</button></Link>
                </div>

                

            </section>
        </main>

    )
}