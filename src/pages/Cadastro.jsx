import { useContext, useEffect, useState } from 'react'
import './Cadastro.css'
import axios from 'axios';
import { GlobalContext } from '../contexts/GlobalContext';

function Cadastro() {

    const [usuario, set_usuario] = useState({nome: ``, email: ``, senha: ``, confirmar_senha: ``});
    const {usuarios, set_usuarios} = useContext(GlobalContext);
    let email_ja_cadastrado = false;
    let senhas_sao_iguais = false;
    const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);

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

        for(let i = 0; i < usuarios.length ; i++){

            if(usuarios[i].email == usuario.email){

                email_ja_cadastrado = true;
            };
        };

        if(usuario.senha == usuario.confirmar_senha){

            senhas_sao_iguais = true;
        };

        if(senhas_sao_iguais && email_ja_cadastrado == false){

            try {
                
            const resposta = await axios.post(`http://localhost:3000/usuarios`, usuario);
                
            pegar_registros_de_usuarios();

            set_usuario({nome: ``, email: ``, senha: ``, confirmar_senha: ``});
            set_mensagem_de_erro(``);

            } catch (erro) {
                
                console.error(`Erro ao cadastrar o/a usuário`, erro);
                
            };

        } else {

            switch(true){

                case senhas_sao_iguais == false && email_ja_cadastrado == true :

                set_mensagem_de_erro(`As senhas devem ser iguais e o email já está cadastrado!`);
                break;

                case senhas_sao_iguais == true && email_ja_cadastrado == true :

                set_mensagem_de_erro(`Email já cadastrado!`);
                break;

                case senhas_sao_iguais == false && email_ja_cadastrado == false :

                set_mensagem_de_erro(`Senhas devem ser iguais!`);
                break;
            };
        };
    };

    const deletar_usuario = async (id) => {

        try {

            const resposta = await axios.delete(`http://localhost:3000/usuarios/${id}`);

            pegar_registros_de_usuarios();

        } catch (erro) {

            console.error(`Erro ao deletar usuário`, erro);
            
        };
    };

    const atualizar_usuario = async (id) => {

        try {
   
            const resposta = await axios.put(`http://localhost:3000/usuarios/${id}`, usuario);
            
            pegar_registros_de_usuarios();

        } catch(erro) {
  
            console.error(`Erro ao atualizar usuário`, erro);
            
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
                <input type='password' maxLength={12} required value={usuario.senha} onChange={e => set_usuario({...usuario, senha: e.target.value})}/>

            </div>

            <div className="dv_inpt_confirmar_senha">

                <label>Confirme sua Senha</label>
                <input type='password' maxLength={12} required value={usuario.confirmar_senha} onChange={e => set_usuario({...usuario, confirmar_senha: e.target.value})}/>

            </div>

            <button type='submit'>Cadastrar</button>

            {mensagem_de_erro}

        </div>

        </form>

        <div className='dv_cards'>

            {usuarios.map( i => (
                
                <div className='card' key={i.id} onMouseLeave={() => set_usuario({nome: i.nome, email: i.email, senha: i.senha})}>

                <p>Nome: {i.nome}</p>
                    <p>Email: {i.email}</p>
                    <p>Senha: {i.senha}</p>
                    <button onClick={() => deletar_usuario(i.id_usuario)}>Deletar Conta</button>
                    <button onClick={() => atualizar_usuario(i.id_usuario)}>Atualizar</button>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Cadastro
