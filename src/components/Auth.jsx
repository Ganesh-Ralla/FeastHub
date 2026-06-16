import { LogIn, X } from 'lucide-react'
import React, { useContext, useState } from 'react'
import {AnimatePresence, easeInOut, motion } from 'motion/react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const Auth = ({ setOpenModel }) => {
  const [authmode, setAuthMode] = useState('login')

  const navigate = useNavigate()

  const {setIsLoggedIn} = useContext(AuthContext)

  const [login,setLogin] = useState({
    username:'',
    password:''
  })

  const handleLogin=(e)=>{
    const {name,value} = e.target
    setLogin({...login,[name]:value})
  }

  const submitLogin=async(e)=>{
    e.preventDefault()
    console.log('user data from state : ',login);

    try{
      const response = await api.post('login/',login)
      console.log(response.data);
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      setOpenModel(false)
      setIsLoggedIn(true)
      navigate('/')
      
      
    }catch(error){
      console.error(error.response.data); 
    }
  }

  const [register,setRegister] = useState({
    first_name:'',
    last_name:'',
    email:'',
    username:'',
    password:''
  })

  const handleRegister=(e)=>{
    const {name,value} = e.target
    setRegister({...register,[name]:value})
  }

  const submitRegister= async(e)=>{
    e.preventDefault()
    console.log('register data from state ',register);
    try{
      const response = await api.post('register-user/',register)
      console.log(response.data);
      setOpenModel(false)
    }catch(error){
      console.error(error.response.data);
      
    }
    
    
    
  }
  return (
    <>
      
        <div className=' flex justify-center items-center min-h-[80vh] fixed z-10 inset-0 backdrop-blur-sm'>
          <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.4,ease:easeInOut}} exit={{y:-20, opacity:0}} 
                      className=' border rounded-xl border-gray-200 bg-white w-2xs md:w-1/2 lg:w-1/4 p-4 hover:cursor-pointer'>
            <p className=' flex justify-end items-center p-2 ' onClick={() => { setOpenModel(false) }}><X /></p>
            {
              authmode === 'login' && (
                <div className=' text-center p-2'>
                  <p className=' font-bold text-3xl mb-3'>Login</p>
                  <form onSubmit={submitLogin} action="" className=' flex flex-col '>
                    <input name='username' value={login.username} onChange={handleLogin} type="text" placeholder='username' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <input name='password' value={login.password} onChange={handleLogin} type="password" placeholder='password' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <button type='submit' className='p-2 text-white font-bold rounded-xl bg-orange-500 mb-3'>Sign in</button>
                  </form>
                  <p>New here ? <span className=' text-orange-500 my-3 hover:cursor-pointer' onClick={() => { setAuthMode('register') }}>Register</span></p>
                </div>
              )
            }

            {
              authmode === 'register' && (
                <div className=' text-center p-2'>
                  <p className=' font-bold text-3xl mb-3'>Register</p>
                  <form onSubmit={submitRegister} action="" className=' flex flex-col '>
                    <input name='first_name' value={register.first_name} onChange={handleRegister} type="text" placeholder='first name' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <input name='last_name' value={register.last_name} onChange={handleRegister} type="text" placeholder='last name' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <input name='email' value={register.email} onChange={handleRegister} type="text" placeholder='email' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <input name='username' value={register.username} onChange={handleRegister} type="text" placeholder='username' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <input name='password' value={register.password} onChange={handleRegister} type="password" placeholder='password' className=' p-2 border rounded-xl border-gray-200 mb-3' />
                    <button className='p-2 text-white font-bold rounded-xl bg-orange-500 mb-3'>Sign up</button>
                  </form>
                  <p>Already have an account? <span className=' text-orange-500 my-3 hover:cursor-pointer' onClick={() => { setAuthMode('login') }}>Sign in</span></p>
                </div>
              )
            }



          </motion.div>
        </div>
      
    </>
  )
}

export default Auth