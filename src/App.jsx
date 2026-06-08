
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import { useState } from 'react'

function App() {
  const [openAuth,setOpenAuth] = useState(false)
  return (
    <>
    <BrowserRouter>
      <Navbar openAuth={openAuth} setOpenAuth={setOpenAuth}/>
      <Routes>
        <Route path='/' element={<Home openAuth={openAuth} setOpenAuth={setOpenAuth} />} />
        <Route path='/about' element={<About openAuth={openAuth} setOpenAuth={setOpenAuth}/>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
