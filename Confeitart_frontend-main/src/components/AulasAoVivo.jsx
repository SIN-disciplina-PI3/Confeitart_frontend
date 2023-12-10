

import React from "react";
import { Link } from "react-router-dom";
import "../components/AulasAoVivo.css"


const Lives = () => {
      
    return (
        <div className= "container" >
    

            <nav className="menu-container" >

                <div className="itens">

                    <div className="logo"></div>
                    
                    <div className="busca">

                        <input type="text" id="busca" placeholder="pesquise " />
                        <div id="lupa"></div>
                    
                    </div>

                    <Link id="cursos" to="/cursos"> Cursos</Link>
                    <Link id="aulas" to="/lives"> Aulas ao vivo</Link>
                    <Link id="forum" to="/forum"> Fórum</Link>
                    <Link id="plano" to="/plano">ConfeitArt+</Link>
                    <Link id="login" to="/login" >Login</Link>
                    <Link id="cadastrar" to="/cadastro">Cadastre-se</Link>
                    </div>
                    
                  </nav>
                  <div className="body_aulas">
            
                 <section className="caixa_pai">
                    <div className="caixa_filha">
                    <p>AULAS AO VIVO</p>
                    
                    <a href="https://www.youtube.com/channel/UCYp8HkKrZWxeYNRJmhGCWUg"><button className="bt_youtube" role="youtube">ACESSE AQUI</button>
                    </a>
                    </div>
                 </section>
                  </div>
                </div>
              
                
                
)
}

export default Lives;