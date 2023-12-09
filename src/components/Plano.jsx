import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import "../components/Plano.css";

import logoBolo from "../assets/boloLogo.png";
import verificaLilas from "../assets/verificaLilas.png";
import verificaMarrom from "../assets/verificaMarrom.png";
import playerLive from "../assets/playerLive.png";

const Plano = () => {
    return (
        <div className="container">
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


                    <Link id="cursos" to="/cursos"> Cursos</Link>
                    <Link id="aulas" to="/lives"> Aulas ao vivo</Link>
                    <Link id="forum" to="/forum"> Fórum</Link>
                    <Link id="login" to="/login">Login</Link>
                    <Link id="cadastrar" to="/cadastro">Cadastre-se</Link>


                </div>

            </nav>

            <div className="containerPlano">
                <h1 className="textoPlanos">Conheça nossos planos:</h1>
                <div className="containerPlanoBasico">
                    <div className="conteudoPlanoBasico">
                        <img className="imgLogoBolo" src={logoBolo} alt="Imagem da logo" />
                        <h1 className="tituloPlanoBasico">Básico</h1>
                        <h1 className="valorPlanoBasico">Grátis</h1>

                        <div className="inclusoPlanoBasico1">
                            <img className="verificaLilas1" src={verificaLilas} alt="Descrição significativa da imagem" />
                            <p>Acesso a TODOS os cursos</p>
                        </div>

                        <div className="inclusoPlanoBasico2">
                            <img className="verificaLilas1" src={verificaLilas} alt="Descrição significativa da imagem" />
                            <p>Conteúdo produzido pelos <br /> professores da ConfeitArt</p>
                        </div>

                        <div className="inclusoPlanoBasico3">
                            <img className="verificaLilas1" src={verificaLilas} alt="Descrição significativa da imagem" />
                            <p>Certificado gratuito</p>
                        </div>

                        <div className="btnPlanoBasico">
                            <button>Assinar</button>
                        </div>
                    </div>


                    <div className="containerPlanoAvancado">
                        <div className="conteudoPlanoAvancado">
                            <img className="imgLogoBolo2" src={logoBolo} alt="Imagem da logo" />
                            <h1 className="tituloPlanoAvancado">Avançado</h1>
                            <p className="valorPlanoAvancado">R$<span className="spanPreco">12</span>,50/mês</p>

                            <div className="inclusoPlanoAvancado1">
                                <img className="verificaMarrom1" src={verificaMarrom} alt="Descrição significativa da imagem" />
                                <p>Acesso a TODOS os cursos</p>
                            </div>

                            <div className="inclusoPlanoAvancado2">
                                <img className="verificaMarrom2" src={verificaMarrom} alt="Descrição significativa da imagem" />
                                <p>Conteúdo produzido pelos <br /> professores da ConfeitArt</p>
                            </div>

                            <div className="inclusoPlanoAvancado3">
                                <img className="verificaMarrom3" src={verificaMarrom} alt="Descrição significativa da imagem" />
                                <p>Certificado gratuito</p>
                            </div>

                            <div className="inclusoPlanoAvancado4">
                                <img className="verificaMarrom4" src={verificaMarrom} alt="Descrição significativa da imagem" />
                                <p>Cursos EXCLUSIVOS</p>
                            </div>

                            <div className="inclusoPlanoAvancado5">
                                <img className="verificaMarrom5" src={verificaMarrom} alt="Descrição significativa da imagem" />
                                <p>Aulas ao vivo</p>
                            </div>

                            <div className="btnPlanoAvancado">
                                <button>Assinar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerVantagens">
                    <div className="containerTextos">
                        <h1 className="tituloVantagens">Vantagens <br /> de ser <span>PRO</span></h1>
                        <p className="textoVantagens">Você terá acesso aos cursos exclusivos <br />
                            para dá aquele charme no seu currículo,<br />
                            além de lives com conteúdos <br /> especialmente para você!</p>
                    </div>
                    <img className="imgPlayerLive" src={playerLive} />
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

export default Plano;