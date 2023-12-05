import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import '../components/Catalogo.css';

const Catalogo = () => {
    return (
        <div>
            <nav className="menu-container" >

                <div className="itens">

                    <div className="logo">
                        <Link to="/"> <div className="logo"></div></Link>
                    </div>
                    <div className="busca">

                        <input type="text" id="busca" placeholder="pesquise " />
                        <div id="lupa"></div>
                        {/* <img src="../src/assets/lupa 3.png" id="lupa" width={30} /> */}
                    </div>

                   

                    <Link id="aulas" to="/lives"> Aulas ao vivo</Link>
                    <Link id="forum" to="/forum"> Fórum</Link>
                    <Link id="plano" to="/plano">ConfeitArt+</Link>
                    <Link id="login" to="/login">Login</Link>
                    <Link id="cadastrar" to="/cadastro">Cadastre-se</Link>
                  

                </div>

            </nav>

            <h1 className="title">Nossos Cursos</h1>
            <hr className="hr_1" />

            <h1 className="selecao_categoria">
                Clique na categoria abaixo e escolha um curso de sua preferência:{" "}
            </h1>

            <div className="categorias-img">
                <div className="ball-1">
                    <img className='wedding-cake' src="../src/assets/wedding-cake.png" alt="Descrição significativa da imagem" />
                </div>
                <div className="ball-2">
                    <img className='donut' src="../src/assets/donut.png" alt="Descrição significativa da imagem" />
                </div>
                <div className="ball-3">
                    <img className='chocolate' src="../src/assets/chocolate.png" alt="Descrição significativa da imagem" />
                </div>
            </div>

            <div className="categorias">
                <h3>Confeitaria</h3>
                <h3>Doces</h3>
                <h3>Chocolate</h3>
            </div>

            <div className="confeitaria">
                <h1>Confeitaria</h1> <hr />

                <div className="linha1">

                    <div className="bolos-caseiros">
                        <img className="img-boloCaseiro" alt="Bolo Caseiro" src="../src/assets/boloCaseiro.jpg" />
                        <h5 className="categoria-nome" >Confeitaria</h5>
                        <h3 className="cursos">Bolos Caseiros</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="bolos-pote">
                        <img className="img-boloPote" alt="Bolos de Pote" src="../src/assets/boloPote1.jpg" />
                        <h5 className="categoria-nome">Confeitaria</h5>
                        <h3 className="cursos">Bolos de Pote</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="confeitaria-basica">
                        <img className="img-confeitariaBasica" alt="Confeitaria Básica" src="../src/assets/torta.jpg" />
                        <h5 className="categoria-nome">Confeitaria</h5>
                        <h3 className="cursos">Confeitaria Básica</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                </div>

                <div className="linha2">


                    <div className="pasta-americana">
                        <img className="img-pastaAmericana" alt="Pasta Americana" src="../src/assets/pastaAmericana.png" />
                        <h5 className="categoria-nome">Confeitaria</h5>
                        <h3 className="cursos">Pasta Americana</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="chantininho">
                        <img className="img-chantininho" alt="Decoração com Chantininho" src="../src/assets/boloRosa.jpg" />
                        <h5 className="categoria-nome">Confeitaria</h5>
                        <h3 className="cursos">Decoração com Chantininho</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="tortas">
                        <img className="img-torta" alt="Torta" src="../src/assets/tortaChocolate.jpg" />
                        <h5 className="categoria-nome">Confeitaria</h5>
                        <h3 className="cursos">Tortas</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                </div>

            </div>

            <div className="doces">
                <h1>Doces</h1> <hr />

                <div className="linha3">

                    <div className="brigadeiros-gourmet">
                        <img className="img-brigadeiros" alt="Brigadeiros Gourmet" src="../src/assets/brigadeiros.jpeg" />
                        <h5 className="categoria-nome">Doces</h5>
                        <h3 className="cursos">Brigadeiros Gourmet</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="bem-casado">
                        <img className="img-bemCasado" alt="Bem Casado" src="../src/assets/bemCasado.jpg" />
                        <h5 className="categoria-nome">Doces</h5>
                        <h3 className="cursos">Bem Casado</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="brownie">
                        <img className="img-brownie" alt="Brownie" src="../src/assets/brownie.jpg" />
                        <h5 className="categoria-nome">Doces</h5>
                        <h3 className="cursos">Brownie</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                </div>

                <div className="linha4">
                    <div className="suspiros">
                        <img className="img-suspiros" alt="Suspiros" src="../src/assets/suspiros.jpg" />
                        <h5 className="categoria-nome">Doces</h5>
                        <h3 className="cursos">Suspiros Gourmet</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="donuts">
                        <img className="img-donuts" alt="Donuts" src="../src/assets/donuts.jpg" />
                        <h5 className="categoria-nome">Doces</h5>
                        <h3 className="cursos">Donuts</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="doces-finos">
                        <img className="img-docesFinos" alt="Doces Finos" src="../src/assets/docesFinos.jpg" />
                        <h5 className="categoria-nome">Doces</h5>
                        <h3 className="cursos">Doces Finos</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>
                </div>

            </div>

            <div className="chocolates">
                <h1>Chocolates</h1> <hr />

                <div className="linha5">

                    <div className="bombons">
                        <img className="img-bombons" alt="Bombons" src="../src/assets/bombons.jpg" />
                        <h5 className="categoria-nome">Chocolates</h5>
                        <h3 className="cursos">Bombons e Trufas</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="bombom-aberto">
                        <img className="img-bombomAberto" alt="Bombom Aberto" src="../src/assets/bombomAberto.jpg" />
                        <h5 className="categoria-nome">Chocolates</h5>
                        <h3 className="cursos">Bombons Aberto</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>

                    <div className="ovo-colher">
                        <img className="img-ovoColher" alt="Ovo de Colher" src="../src/assets/ovoColher.jpg" />
                        <h5 className="categoria-nome">Chocolates</h5>
                        <h3 className="cursos">Ovos de Colher</h3>
                        <button className="btn-matricula">Matricule-se</button>
                    </div>
                </div>
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
    )
}
export default Catalogo