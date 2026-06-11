import { Menu, Search, UserCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ openModel,setOpenModel,setModel, openSearchBar, setOpenSearchBar, searchInput, setSearchInput, setSearchTaken }) => {

  const [menu, setMenu] = useState(false)
  const [opensearch, setOpenSearch] = useState(false)

  const openMenu=()=>{
    setMenu(!menu)
    setOpenSearch(false)
  }

  const openSearchbar=()=>{
    setOpenSearch(!opensearch)
    setMenu(false)
  }


  const navigate = useNavigate()
  const inputRef = useRef(null)

  const handleSearch=(e)=>{
    setSearchInput(e.target.value)
  }

  useEffect(()=>{
        if(openSearchBar){
            inputRef.current?.focus()
        }
    },[openSearchBar])

    const handleKey = (e) => {
        if (e.key === "Enter") {
            setSearchTaken(true)
            navigate('/menu')

            setOpenSearchBar(false)
        }
    }

    console.log("Search Input : ",searchInput);
    
  return (
    <>
      <nav className=' fixed w-full z-10 top-0 '>
        <div className=' p-4 md:px-8 lg:px-12 bg-white'>
          <div className=' flex items-center justify-between '>
            <Link to='/' className=' font-bold text-2xl md:text-3xl'>  <span>Feast</span><span className=' text-orange-500'>Hub</span></Link>

            <div className='flex  items-center gap-2 md:hidden'>
              <Search onClick={openSearchbar} />
              <Menu onClick={openMenu} />
            </div>

            <div className='hidden md:flex items-center justify-around gap-4'>
              <div className=' flex items-center border rounded-full p-2 px-4 border-gray-300'>
                <input type="text" placeholder='search' className=' outline-0'
                value={searchInput} onChange={handleSearch} onKeyDown={handleKey} />
                <span><Search color='gray'  /> </span>
              </div>
              <Link to='/about' >About</Link>
              <Link to='/cart' >Cart</Link>
              <Link ><UserCircle onClick={() => { setOpenModel(true),setModel('user') }} /></Link>
            </div>
          </div>

        </div>
        {
          menu && (
            <div className=' flex flex-col justify-around gap-2 p-4 bg-blue-200'>
              <Link to='/about' >About</Link>
              <Link to='/cart' >Cart</Link>
              <Link><UserCircle onClick={() => { setOpenModel(true),setModel('user') }} /></Link>
            </div>
          )
        }
        {
          opensearch && (
            <div className=' bg-orange-100 p-4'>
              <div className=' flex items-center justify-between border rounded-full p-2 px-4 border-gray-300'>
                <input type="text" placeholder='search' className=' outline-0'
                value={searchInput} ref={inputRef} onChange={handleSearch} onKeyDown={handleKey} />
                <span><Search color='gray' /> </span>
              </div>
            </div>

          )
        }

      </nav>

    </>
  )
}

export default Navbar