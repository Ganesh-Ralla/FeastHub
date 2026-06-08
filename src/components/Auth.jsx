import { X } from 'lucide-react'
import React, { useState } from 'react'

const Auth = ({setOpenAuth}) => {
  const [authmode, setAuthMode] = useState('login')
  return (
    <>
      <div className=' flex justify-center items-center min-h-[80vh] fixed z-10 inset-0 backdrop-blur-sm'>
        <div className=' border rounded-xl border-gray-200 bg-white w-2xs md:w-1/2 lg:w-1/4 p-4 hover:cursor-pointer'>
          <p className=' flex justify-end items-center p-2 ' onClick={()=>{setOpenAuth(false)}}><X /></p>
          {
            authmode === 'login' && (
              <div className=' text-center p-2'>
                <p className=' font-bold text-3xl mb-3'>Login</p>
                <form action="" className=' flex flex-col '>
                  <input type="text" placeholder='username' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                  <input type="text" placeholder='password' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                  <button className='p-2 text-white font-bold rounded-xl bg-blue-500 mb-3'>Sign in</button>
                </form>
                <p>New here ? <span className=' text-blue-500 my-3 hover:cursor-pointer' onClick={()=>{setAuthMode('register')}}>Register</span></p>
              </div>
            )
          }

          {
            authmode === 'register' && (
              <div className=' text-center p-2'>
                <p className=' font-bold text-3xl mb-3'>Register</p>
                <form action="" className=' flex flex-col '>
                  <input type="text" placeholder='full name' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                  <input type="text" placeholder='email' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                  <input type="text" placeholder='username' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                  <input type="text" placeholder='password' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                  <button className='p-2 text-white font-bold rounded-xl bg-blue-500 mb-3'>Sign up</button>
                </form>
                <p>Already have an account? <span className=' text-blue-500 my-3 hover:cursor-pointer' onClick={()=>{setAuthMode('login')}}>Sign in</span></p>
              </div>
            )
          }



        </div>
      </div>
    </>
  )
}

export default Auth