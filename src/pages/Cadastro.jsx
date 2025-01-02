import { useContext, useEffect, useState } from 'react'
import './Cadastro.css'
import axios from 'axios';
import { GlobalContext } from '../contexts/GlobalContext';

function Cadastro() {

    const [usuario, set_usuario] = useState({nome: ``, email: ``, senha: ``, confirmar_senha: ``});
    const {usuarios, set_usuarios} = useContext(GlobalContext);

    useEffect(() => {

        pegar_registros_de_usuarios();

    }, []);

    const pegar_registros_de_usuarios = async () => {

        try {
            
            const resposta = await axios.get(`http://localhost:3000/usuarios`);
            set_usuarios(resposta.data);

        } catch (erro) {
            
            console.error(`Erro ao buscar os usuários`, erro);
            
        };
    };

    const cadastrar = async e => {

        e.preventDefault();

        try {
            
           const resposta = await axios.post(`http://localhost:3000/usuarios`, usuario);
            
           pegar_registros_de_usuarios();

           set_usuario({nome: ``, email: ``, senha: ``, confirmar_senha: ``});

        } catch (erro) {
            
            console.error(`Erro ao cadastrar o/a usuário`, erro);
            
        };
    };

    return (
    <div>

        <form onSubmit={cadastrar}>

        <div className="grupo_de_inpts">

            <div className="dv_inpt_nome">

                <label>Nome</label>
                <input required value={usuario.nome} onChange={e => set_usuario({...usuario, nome: e.target.value})}/>

            </div>

            <div className="dv_inpt_email">

                <label>Email</label>
                <input type='email' required value={usuario.email} onChange={e => set_usuario({...usuario, email: e.target.value})}/>

            </div>

            <div className="dv_inpt_senha">

                <label>Senha</label>
                <input type='password' required value={usuario.senha} onChange={e => set_usuario({...usuario, senha: e.target.value})}/>

            </div>

            <div className="dv_inpt_confirmar_senha">

                <label>Confirme sua Senha</label>
                <input type='password' value={usuario.confirmar_senha} onChange={e => set_usuario({...usuario, confirmar_senha: e.target.value})}/>

            </div>

            <button type='submit'>Cadastrar</button>

        </div>

        </form>

    </div>
  )
}

export default Cadastro