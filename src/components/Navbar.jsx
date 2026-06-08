import { Menu, UserCircle } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({openAuth,setOpenAuth}) => {

  const [menu, setMenu] = useState(false)

  return (
    <>
      <nav className=' fixed w-full z-10 top-0 '>
        <div className=' p-4 md:px-8 lg:px-12 bg-blue-400 text-white'>
          <div className=' flex items-center justify-between '>
            <Link to='/' className=' font-bold text-2xl md:text-3xl'>FeastHub</Link>
            <div className=' md:hidden'>
              <Menu onClick={() => { setMenu(!menu) }} />
            </div>
            <div className='hidden md:flex items-center justify-around gap-4'>
              <Link to='/about' >About</Link>
              <Link ><UserCircle onClick={()=>{setOpenAuth(true)}} /></Link>
            </div>
          </div>

        </div>
        {
          menu && (
            <div className=' flex flex-col justify-around gap-2 p-4 bg-blue-200'>
              <Link to='/about' >About</Link>
              <Link><UserCircle onClick={()=>{setOpenAuth(true)}} /></Link>

            </div>
          )
        }

      </nav>

    </>
  )
}

export default Navbar