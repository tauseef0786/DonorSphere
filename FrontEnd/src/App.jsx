import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Campaign from './pages/Campaign'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Campigns from './pages/Campigns'

function App() {

  return (
    <>
      <Navbar/>
        <div className="mt-16">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/campaigns' element={<Campigns />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/campaigns/:campaignId' element={<Campaign />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer/>
    </>
  )
}

export default App
