import React from "react";
import { Link } from "react-router-dom";
import './Cadastro.css';
import Navbar from "../Navbar/Navbar";

const Cadastro = () => {
    return (
        <>
        <Navbar />
            <div className="contCadastro">
                <form className="cont">
                    <h1>Crie sua conta</h1>
                    <div className="inpText">
                        <input type="text" className="NomeCad" placeholder="Nome Completo" />
                        <input type="tel" class="TelefoneCad" required placeholder="  Telefone (xx) xxxxx-xxxx"></input>
                        <input type="email" className="EmailCad" placeholder="Melhor Email" />
                        <input type="password" className="SenhaCad" placeholder=" Senha" />
                    </div>
                    <div className="check">
                        <div className="checkAluno-professor">
                            <p>Aluno</p>
                            <input type="checkbox" />
                        </div>
                        <div className="Listra"></div>
                        
                        <div className="checkAluno-professor">
                            <p>Professor</p>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className="BtCad">
                        <a href="#">Cadastrar</a>
                    </div>
                    
                    <div className="fin">
                       <hr /> 
                       <p>Já tem conta?<Link to="/Login"> Faça o Login</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;