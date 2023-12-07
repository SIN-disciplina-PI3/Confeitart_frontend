import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx"

const Login = () => {
  return (
    <>
      <Navbar />
    
        <div className='backLogin'>
            <form className='ContainerForm' action="">
            <h2>Faça login em sua conta</h2>

                <input type="text" placeholder='  E-mail' />
                <input type="password" placeholder='  Senha' />
                <Link to="/Perfil" className='buttonLogin'>Entrar</Link>
                <p>Ou <a href="#">Esqueceu senha?</a></p>
                <div className='hrdiv'></div>
               <p> Você não tem uma conta? <Link to="/Cadastro"> Cadastre-se</Link></p>
            </form>
        </div>
    </>
  )
}

export default Login