import '../../common/index.scss'
import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { cadastrarCliente, cadastrarLogin } from '../../../api/loginCliente'


export default function Index(){

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [apelido, setApelido] = useState('')

    const [idUsuario, setIdUsuario] = useState()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const Novo = _=>{
        setNome('');
        setCpf('');
        setTelefone('');
        setApelido('');
        setEmail('');
        setSenha('');
    }

    const Cadastro = async () => {
        try {
            const novoUser = await cadastrarCliente(nome, cpf, telefone, apelido);
            const r = await cadastrarLogin(novoUser.id, email, senha);
            Novo();

            alert('Cadastrado com Sucesso');
        } catch (err) {
            alert(err.message);
        }
    }




    return(

        <main className='cadastroCliente'>
            
            <Link className="links" to="/home/inicio"><button className='botao '> Voltar</button></Link>

            <section className='principal'>

                <section className='cadastro'>   

                    <div className='meio'>
                        <div className='left'>
                            <h2>Nome completo*</h2>
                            <input type="text" value={nome} onChange={e =>setNome(e.target.value)} />
                            <hr/>

                            <h2>Nome do usuario*</h2>
                            <input type="text" value={apelido} onChange={e =>setApelido(e.target.value)}/>
                            <hr/>

                            <h2>Email*</h2>
                            <input type="text" value={email} onChange={e =>setEmail(e.target.value)}/>
                            <hr/>

                            <h2>Senha*</h2>
                            <input type="password" value={senha} onChange={e =>setSenha(e.target.value)}/>
                            <hr/>
                        </div>

                        <div className='right'>
                            <h2>CPF*</h2>
                            <input type="text" value={cpf} onChange={e =>setCpf(e.target.value)}/>
                            <hr/>

                            <h2>Telefone*</h2>
                            <input type="text" value={telefone} onChange={e =>setTelefone(e.target.value)}/>
                            <hr/>

                            
                        
                        </div>

                        
                    </div>

                    <button className='botao-right' onClick={Cadastro}> Cadastrar-se </button>
                    
                </section>

            </section>



        </main>


    )
}