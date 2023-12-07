
import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../components/Forum.css';
import Comentario from "../components/Comentario";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

class Forum extends Component {
    state={
   comentarios:[
   {
    nome: 'Gio',
    curso: 'Confeitaria Básica',
    data: new Date(2023, 12, 6),
    mensagem:'Olá, tudo bem?'
   },
   {
    nome: 'Devid',
    curso: 'Confeitaria Básica',
    data: new Date(2023, 12, 6),
    mensagem:'tudo indo amiga'
   }
],
novoComentario:{
 nome: '',
 curso: '',
 mensagem: ''
}

    }
    adicionarComentario = (evento)=>{
       
        evento.preventDefault()
    
        const novoComentario = {...this.state.novoComentario, data: new Date() }
     this.setState({
        comentarios:[...this.state.comentarios , novoComentario],
        novoComentario:{nome:'' , curso: '' , mensagem:''}
     })

      

      }
      digitacaoDoNome = (evento) =>{
        const value = evento.target.value
        const nome = evento.target.name
        this.setState({novoComentario: {...this.state.novoComentario , [nome]: value}})
      }
    render() {
        return (
            <div className="container-principal">
                <div className="background">
                    <nav className="menu-container">
                        <div className="itens">
                        <Link to="/"> <div className="logo"></div></Link>
                            <div className="busca">
                                <input type="text" id="busca" placeholder="pesquise " />
                                <div id="lupa"></div>
                            </div>
                            <Link id="cursos" to="/cursos">Cursos</Link>
                            <Link id="aulas" to="/lives">Aulas ao vivo</Link>
                            <Link id="plano" to="/plano">ConfeitArt+</Link>
                            <Link id="login" to="/login">Login</Link>
                            <Link id="cadastrar" to="/cadastro">Cadastre-se</Link>
                        </div>
                    </nav>

                    <section className="titulo">
                        <h1 id="txt1">Converse com a comunidade ConfeitArt!</h1>
                        <div className="imgBatePapo"></div>
                    </section>
                </div>

                <section className="titulo2">
                    <h3>Converse com <p>seus professores</p></h3>
                    <h3>Converse com os alunos<p> de outros cursos</p></h3>
                    <h3>Comece o seu<p>networking</p> </h3>
                </section>
                <hr id="linha" />
                
            
                

                <section className="comentarios">
                    <h2 id="txt2"> 😊🤩😄🧁</h2>
             <h2 id="txt2">Comunidade ConfeitArt</h2>
                    {this.state.comentarios.map((comentario ,indice) =>(
  <Comentario 
  key = {indice}
  nome={ "Estudante: "+ comentario.nome} 
  curso={"Curso: " +comentario.curso} 
  data={comentario.data}>
 {comentario.mensagem}
</Comentario>
                    ))}
                  
                  </section>
                  <hr id="linha"/>
<div className="Formulario">

<form method="post" onSubmit={this.adicionarComentario}>
 <div > 
    <input type="text" 
    name="nome" 
    value={this.state.novoComentario.nome}
    onChange={this.digitacaoDoNome}
    placeholder="digite seu nome"/>
 </div>
 <div> 
    <input type="text" 
    name="curso" 
    value={this.state.novoComentario.curso}
    onChange={this.digitacaoDoNome}
    placeholder="digite seu curso"/>
 </div>

 <div>
    <textarea name="mensagem" 
    rows="4"
    placeholder="comente aqui"
    value={this.state.novoComentario.mensagem}
    onChange={this.digitacaoDoNome}
    ></textarea>
 </div>
 <button type="submit">Comentar</button>

</form>
</div>
               

 <footer className="footer">
                <div className="footer-container">

                    <h1>ConfeitArt</h1>

                    <div className="institucional">
                        <h4>Institucional</h4>
                        <ul>
                            <li>Sobre nós</li>
                            <li>Trabalhe Conosco</li>
                            <li>Política de Privacidade</li>
                            <li>Compromisso de Integridade</li>
                            <li>Termos de Uso</li>
                        </ul>
                    </div>

                    <div className="sobre">
                        <h4>A ConfeitArt</h4>
                        <ul>
                            <li>Como Funciona</li>
                            <li>Todos os cursos</li>
                            <li>Professores</li>
                        </ul>
                    </div>

                    <div className="contato">
                        <h4>Fale Conosco</h4>
                        <ul><li>Email e Telefone</li></ul>
                    </div>

                    <div className="rede-social">
                        <h4>Nossas Redes Sociais</h4>
                        <ul className="social-list">
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaYoutube /></li>
                        </ul>
                    </div>
                </div>

            </footer>

            </div>
        );
    }
}

export default Forum;

