import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Catalogo from '../components/Catalogo.jsx'
import ErrorPages from '../components/ErrorPages.jsx'
import Login from '../components/Login/Login.jsx'
import Cadastro from '../components/Cadastro/Cadastro.jsx'
import Lives from '../components/AulasAoVivo.jsx'
import Forum from '../components/Forum.jsx'
import Plano from '../components/Plano.jsx'
import Perfil from '../components/Perfil/Perfil.jsx'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Catalogo />} />
        <Route path="*" element={<ErrorPages />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/cadastro' element ={<Cadastro/>} />
        <Route path='/lives' element = {<Lives/>} />
        <Route path='/forum' element = {<Forum/>} />
        <Route path='/plano' element = {<Plano/>} />
        <Route path='/Perfil' element = {<Perfil/>} />
    </Routes>
  )
}

export default AppRoutes