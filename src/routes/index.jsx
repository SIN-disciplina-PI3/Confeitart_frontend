import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home.jsx'
import Catalogo from '../components/Catalogo.jsx'
import ErrorPages from '../components/ErrorPages.jsx'
import Login from '../components/Login.jsx'
import Cadastro from '../components/Cadastro.jsx'
import Lives from '../components/AulasAoVivo.jsx'
import Forum from '../components/Forum.jsx'
import Plano from '../components/Plano.jsx'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Catalogo />} />
        <Route path="*" element={<ErrorPages />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element ={<Cadastro/>} />
        <Route path='/lives' element = {<Lives/>} />
        <Route path='/forum' element = {<Forum/>} />
        <Route path='/plano' element = {<Plano/>} />
    </Routes>
  )
}

export default AppRoutes