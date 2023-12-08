import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import '../components/AulaCurso.css';
import Compartilhar from "./Compartilhar/Compartilhar.jsx";

import videoConfeitaria from "../assets/videoConfeitaria.mp4";
import botaoPlay from "../assets/botaoPlay.png";
import botaoPause from "../assets/botaoPause.png";
import telaCheia from "../assets/telaCheia.png";
import botaoVolume from "../assets/botaoVolume.png";
import computador from "../assets/computador.png";
import setaModulo from "../assets/setaModulo.png";
import chefeConfeiteiro from "../assets/chefeConfeiteiro.png";
import setaProgresso from "../assets/setaProgresso.png";
import setaCompartilhar from "../assets/setaCompartilhar.png";

function usePlayerState($videoPlayer) {
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
        volume: 1,
        showVolumeBar: false
    })

    useEffect(() => {
        playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
    }, [
        $videoPlayer,
        playerState.playing
    ]);

    function toggleVideoPlay() {
        setPlayerState({
            ...playerState,
            playing: !playerState.playing,
        })
    }

    function handleTimeUpdate() {
        const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
        setPlayerState({
            ...playerState,
            percentage: currentPercentage,
        })
    }

    function handleChangeVideoPercentage(event) {
        const currentPercentageValue = event.target.value;
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue;

        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })
    }

    function handleFullScreen() {
        const video = $videoPlayer.current;

        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    };

    function handleChangeVolume(event) {
        const volumeValue = event.target.value;
        $videoPlayer.current.volume = volumeValue;

        setPlayerState({
            ...playerState,
            volume: volumeValue,
        });
    }

    function toggleVolumeBar() {
        setPlayerState({
            ...playerState,
            showVolumeBar: !playerState.showVolumeBar,
        });
    }

    return {
        playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage,
        handleFullScreen,
        handleChangeVolume,
        toggleVolumeBar,
    }
}

const AulaCurso = () => {
    const $videoPlayer = useRef(null);

    const [moduloCheckboxesVisible, setModuloCheckboxesVisible] = useState(false);
    const [modulo2CheckboxesVisible, setModulo2CheckboxesVisible] = useState(false);
    const [modulo3CheckboxesVisible, setModulo3CheckboxesVisible] = useState(false);
    const [modulo4CheckboxesVisible, setModulo4CheckboxesVisible] = useState(false);

    const { playerState,
        toggleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage,
        handleFullScreen,
        handleChangeVolume,
        toggleVolumeBar,
    } = usePlayerState($videoPlayer);

    const toggleModuloCheckboxes = () => {
        setModuloCheckboxesVisible(!moduloCheckboxesVisible);
    };

    const toggleModulo2Checkboxes = () => {
        setModulo2CheckboxesVisible(!modulo2CheckboxesVisible);
    };

    const toggleModulo3Checkboxes = () => {
        setModulo3CheckboxesVisible(!modulo3CheckboxesVisible);
    };

    const toggleModulo4Checkboxes = () => {
        setModulo4CheckboxesVisible(!modulo4CheckboxesVisible);
    };

    const [sharePopupVisible, setSharePopupVisible] = useState(false);

    const toggleSharePopup = () => {
        setSharePopupVisible(!sharePopupVisible);
    };

    const shareLink = "http://localhost:5173/aulas";

    return (

        <div className="container">
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
                    <Link id="login" to="" >Meus Cursos</Link>
                    <Link id="cadastrar" to="/Perfil">Perfil</Link>

                </div>

            </nav>

            <div className="titleBar">
                <h3 className="titleVideo">Curso de cupcake para casamento</h3>
                <div className="progresso">
                    <img className="imgChefeConfeiteiro" src={chefeConfeiteiro} />
                    <h4 className="progressBar">Seu Progresso</h4>
                    <button className="btnProgresso"><img className="setaProgresso" src={setaProgresso} /></button>
                    <button className="btnCompartilhar" onClick={toggleSharePopup}>
                        Compartilhar
                        <img className="setaCompartilhar" src={setaCompartilhar} />
                    </button>
                </div>
            </div>

            <div className="videoContainer">

                <div className="videoWrapper">
                    <video className="videoPlayer"
                        ref={$videoPlayer}
                        src={videoConfeitaria}
                        onTimeUpdate={handleTimeUpdate}
                    />

                    <div className="controls">
                        <button className="btnControls" onClick={toggleVideoPlay}>{playerState.playing ?
                            (<img className="botaoPause" src={botaoPause} />) :
                            (<img className="botaoPlay" src={botaoPlay} />)}
                        </button>


                        <input
                            type="range"
                            min={0} max={100}
                            onChange={handleChangeVideoPercentage}
                            value={playerState.percentage} />

                        <button className="btnControls" onClick={toggleVolumeBar}>
                            <img className="botaoVolume" src={botaoVolume} alt="Volume" />
                        </button>
                        {playerState.showVolumeBar && (
                            <div className="volumeBarWrapper">
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    onChange={handleChangeVolume}
                                    value={playerState.volume}
                                />
                            </div>
                        )}

                        <button className="btnControls" onClick={handleFullScreen}><img className="telaCheia" src={telaCheia} /></button>

                    </div>
                </div>

                <div className="modulos">
                    <div className="titleModulo">
                        <h3 className="modulo1">Módulo 1: Apresentar</h3>
                        <button onClick={toggleModuloCheckboxes} className="btnSeta"><img className="setaModulo" src={setaModulo} /></button>
                    </div>
                    <p className="p-modulo1">2/2 | 4 min</p>
                    {moduloCheckboxesVisible && (
                        <>
                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" />1. Sobre o curso
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">2 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 2. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">2 minutos</p>
                            </div>
                        </>
                    )}

                    <div className="titleModulo">
                        <h3 className="modulo2">Módulo 2: Massas</h3>
                        <button onClick={toggleModulo2Checkboxes} className="btnSeta"><img className="setaModulo" src={setaModulo} /></button>
                    </div>
                    <p className="p-modulo2">4/4 | 60 min</p>
                    {modulo2CheckboxesVisible && (
                        <>
                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" />1. Sobre o curso
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">20 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 2. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">20 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 3. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">10 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 4. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">10 minutos</p>
                            </div>
                        </>
                    )}

                    <div className="titleModulo">
                        <h3 className="modulo3">Módulo 3: Recheios</h3>
                        <button onClick={toggleModulo3Checkboxes} className="btnSeta"><img className="setaModulo" src={setaModulo} /></button>
                    </div>
                    <p className="p-modulo3">4/4 | 60 min</p>
                    {modulo3CheckboxesVisible && (
                        <>
                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" />1. Sobre o curso
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">20 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 2. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">20 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 3. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">10 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 4. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">10 minutos</p>
                            </div>
                        </>
                    )}

                    <div className="titleModulo">
                        <h3 className="modulo3">Módulo 4: Coberturas</h3>
                        <button onClick={toggleModulo4Checkboxes} className="btnSeta"><img className="setaModulo" src={setaModulo} /></button>
                    </div>
                    <p className="p-modulo3">4/4 | 60 min</p>
                    {modulo4CheckboxesVisible && (
                        <>
                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" />1. Sobre o curso
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">20 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 2. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">20 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 3. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">10 minutos</p>
                            </div>

                            <label className="checkbox">
                                <input type="checkbox" className="checkAulas" /> 4. Como conseguir ajuda
                            </label>
                            <div className="tempoDuracao">
                                <img className="computador" src={computador} /> <p className="duracaoAula">10 minutos</p>
                            </div>
                        </>
                    )}

                </div>
            </div>


            <div className="modulo">
                <h3 className="moduloAula">Módulo 1: Apresentação</h3>
            </div>

            {sharePopupVisible && (
                <Compartilhar link={shareLink} onClose={toggleSharePopup} />
            )}

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

export default AulaCurso;