
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import { useState } from 'react'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import ScrollToTop from './components/ScrollToTop'
import AuthProvider from './context/AuthContext'
import Profile from './pages/Profile'
import Searched from './pages/Searched'

function App() {
  const [openModel, setOpenModel] = useState(false)
  const [model, setModel] = useState('')

  const [openSearchBar, setOpenSearchBar] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [searchTaken, setSearchTaken] = useState(false)
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar openModel={openModel} setOpenModel={setOpenModel} setModel={setModel}
            openSearchBar={openSearchBar} setOpenSearchBar={setOpenSearchBar}
            searchInput={searchInput} setSearchInput={setSearchInput}
            searchTaken={searchTaken} setSearchTaken={setSearchTaken} />

          <Routes>
            <Route path='/' element={<Home openModel={openModel} setOpenModel={setOpenModel} model={model} setModel={setModel} />} />
            <Route path='/about' element={<About openModel={openModel} setOpenModel={setOpenModel} />} />
            <Route path='/cart' element={<Cart openModel={openModel} setOpenModel={setOpenModel} />} />
            <Route path='/menu' element={<Menu openModel={openModel} setOpenModel={setOpenModel} model={model} setModel={setModel} />} />
            <Route path='/search' element={<Searched searchInput={searchInput} openModel={openModel} setOpenModel={setOpenModel} model={model} setModel={setModel} />} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>

    </>
  )
}

export default App
