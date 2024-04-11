import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'


function App() {

  return (
    <Routes>
      <Route path='/' element={<LayOut />} >
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
