import React from 'react'
import "./Perfil.css"
import NavbarPerfi from '../Navbar/NavbarPerfil'

const Perfil = () => {
    return (
        <>
            <NavbarPerfi />
            <div className="backPerfil">
                <form action="" >
                    <h1>Perfil</h1>
                    <p className='nome'>Nome completo:</p>
                    <input type="text" className='inputNome' placeholder='  Ex: Maria Lucia da Silva' />
                    <div className='linha2'>
                        <div className='Cpf'>
                            <p>CPF:</p>
                            <input type="text" placeholder='  000.000.000-00' />
                        </div>
                        <div className='Date'>
                            <p>Data de Nascimento:</p>
                            <input type="date" />
                        </div>
                        <div className='Grau'>
                            <p>Grau de Ensino:</p>
                            <select name="" id="">
                                <option value="" disabled selected> Selecione</option>
                                <option value="">Médio Completo</option>
                                <option value="">Médio Incompleto</option>
                                <option value="">Superior Completo</option>
                                <option value="">Superior Incompleto</option>
                                <option value="">Especialização</option>
                            </select>
                        </div>
                    </div>
                    <div className='E-mail'>
                        <p>E-mail</p>
                        <input type="text" placeholder='  Exemplo@gmail.com' />
                    </div>

                    <div className='alteraSenha'>
                        <p className='altera'>Altera Senha:</p>
                        <div className='senhas'>
                            <div>
                                <p>Nova Senha:</p>
                                <input type="password" />
                            </div>
                            <div>
                                <p>Confirma senha:</p>
                                <input type="password" />
                            </div>
                            <div>
                                <p>Senha Antiga</p>
                                <input type="password" />
                            </div>

                        </div>
                    </div>
                    <div className='BtSalvar'>
                        <a href="#">Salvar</a>

                    </div>
                    <hr className='hrPerfil' />

                    <div className='boxPlanoPerfil'>
                        <p className='Title'>Plano</p>
                        <div className='BoxPlano'>
                            <p className='P-Atual'>Plano Atual:</p>
                            <p className='P-Valor'>ConfeitArt+  (R$12,50)</p>
                        </div>
                        <div className="BoxTemp">
                            <p className="P-Temp">Tempo Restante:</p>
                            <p className="P-Rest">27 Dias</p>
                        </div>

                        <div className='Bt-Rn-Plano'>
                            <a href="#">Renovar Plano</a>
                        </div>

                    </div>
                </form>

            </div>
        </>
    )
}

export default Perfil