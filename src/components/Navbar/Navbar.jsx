import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return (
        <>
            <nav className="menu-container" >

                <div className="itens">

                    <div className="logo" >
                    </div>
                    <div className="busca">

                        <input type="text" id="busca" placeholder=" Pesquisar " />
                        <img src="../src/assets/lupa.png" id="lupa" width={30} />
                    </div>

                    <Link id="cursos" to="/cursos"> Cursos</Link>

                    <p id="aulas">Aulas ao vivo</p>
                    <p id="forum">Fórum</p>
                    <p id="plano">ConfeitArt+</p>
                    <Link id="login" to="/Login">Login </Link>

                    <Link to="/Cadastro" id="cadastrar">Cadastre-se</Link>
             
                </div>
            </nav>

        </>
    )
}

export default Navbar