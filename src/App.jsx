
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import { useState } from 'react'
import Cart from './pages/Cart'

function App() {
  const [openModel,setOpenModel] = useState(false)
  const [model,setModel] = useState('')
  return (
    <>
    <BrowserRouter>
      <Navbar openModel={openModel} setOpenModel={setOpenModel} setModel={setModel} />
      <Routes>
        <Route path='/' element={<Home openModel={openModel} setOpenModel={setOpenModel} model={model} setModel={setModel} />} />
        <Route path='/about' element={<About openModel={openModel} setOpenModel={setOpenModel} />} />
        <Route path='/cart' element={<Cart openModel={openModel} setOpenModel={setOpenModel}/>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
