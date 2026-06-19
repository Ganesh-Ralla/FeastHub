
import React, { useContext, useEffect, useState } from 'react'
import api from '../api/axios'
import { Box, Lock, LogOut, Mail, PenIcon, Star, User, X } from 'lucide-react'
import emptyuser from '../assets/empty-user.png'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setOpenLogout }) => {
  const { setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'>
      <div className='border text-center bg-white border-gray-200 rounded-xl p-4 min-h-56 w-full max-w-sm'>
        <p onClick={() => setOpenLogout(false)} className='hover:cursor-pointer flex items-center justify-end'><X /></p>

        <div className='flex flex-col justify-around my-4'>
          <p className='font-bold text-2xl'>Are You Sure?</p>
          <p>Want to logout</p>

          <div className='flex items-center justify-around p-4'>
            <button onClick={logout} className='hover:cursor-pointer font-bold border border-gray-200 bg-red-500 py-2 px-4 rounded-xl text-white'>Yes</button>

            <button onClick={() => setOpenLogout(false)} className='hover:cursor-pointer font-bold border border-gray-200 bg-green-500 py-2 px-4 rounded-xl text-white'>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Profile = () => {
  const [user, setUser] = useState({})
  const [openLogout, setOpenLogout] = useState(false)
  const [orders, setOrders] = useState([])

  const accessToken = localStorage.getItem('accessToken')

  const getUserProfile = async () => {
    try {
      const response = await api.get('profile/', {headers: { Authorization: `Bearer ${accessToken}` }})

      setUser(response.data)
    } catch (error) {
      console.error(error.response?.data)
    }
  }

  const order_history = async () => {
    try {
      const response = await api.get('order/history', {headers: { Authorization: `Bearer ${accessToken}` }})

      setOrders(response.data)
    } catch (error) {
      console.error(error.response?.data)
    }
  }

  useEffect(() => {
    getUserProfile()
    order_history()
  }, [])

  return (
    <>
      <div className='mt-16 p-4 md:px-8 lg:px-12'>
        <div className='flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between'>
          <div>
            <p className='text-2xl font-bold'>My Profile</p>
            <p className='text-sm text-gray-500'>Manage your account information and preferences</p>
          </div>

          <div onClick={() => setOpenLogout(true)} className='hover:cursor-pointer flex gap-2 items-center  bg-orange-500 p-2 text-white rounded-xl w-fit'>
            <LogOut size={20} />
            <p>Logout</p>
          </div>
        </div>

        
        <div className='border border-gray-200 rounded-xl p-4 my-4 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left'>
            <img src={emptyuser} alt='user' className='h-28 sm:h-36 p-2 object-contain'/>

            <div>
              <p className='text-xl font-bold wrap-break-word'>{user.first_name} {user.last_name}</p>

              <p className='text-gray-500 flex flex-wrap items-center gap-2 justify-center sm:justify-start break-all'>
                <Mail size={18} />
                {user.email}
              </p>
            </div>
          </div>

          <div className='flex items-center justify-between bg-orange-100 rounded-xl p-4 w-full lg:w-auto'>
            <div>
              <p className='font-bold'>FeastHub Points</p>
              <p className='text-2xl font-bold text-orange-500'>120</p>
              <p className='text-gray-500 text-sm'>Place more orders to earn <br /> exciting rewards!</p>
            </div>

            <Star className='text-orange-500 bg-orange-200 p-2 rounded-full' size={40} />
          </div>
        </div>

        
        <div className='flex flex-col lg:flex-row gap-6'>
          
          <div className='border border-gray-200 rounded-xl p-4 w-full lg:w-1/3'>
            <p className='text-2xl font-bold mb-4'>Account Information</p>

            <div className='flex flex-col'>
              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-300 py-3'>
                <p className='flex items-center gap-2 text-gray-500'>
                  <User size={18} /> Full Name
                </p>

                <p className='font-bold wrap-break-word'>{user.first_name} {user.last_name}</p>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-300 py-3'>
                <p className='flex items-center gap-2 text-gray-500'>
                  <Mail size={18} />Email
                </p>

                <p className='font-bold break-all'>{user.email}</p>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-300 py-3'>
                <p className='flex items-center gap-2 text-gray-500'>
                  <User size={18} />Username
                </p>

                <p className='font-bold break-all'>{user.username}</p>
              </div>

              <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-300 py-3'>
                <p className='flex items-center gap-2 text-gray-500'>
                  <Lock size={18} />Password
                </p>

                <p className='font-bold'>*****</p>
              </div>

              <div className='flex gap-2 items-center justify-center mt-4 bg-orange-500 p-3 text-white rounded-xl cursor-pointer'>
                <PenIcon size={20} />
                <p>Edit Profile</p>
              </div>
            </div>
          </div>

          
          {orders.length === 0 ? (
            <div className='border border-gray-200 rounded-xl p-4 min-h-96 w-full lg:w-2/3 flex items-center justify-center'>
              <div className='flex flex-col items-center text-center'>
                <Box size={50} />
                <p className='font-bold text-lg mt-2'>No orders yet</p>
                <p className='text-gray-400'>Your past orders will show up here once you place one</p>
              </div>
            </div>
          ) : (
            <div className='border border-gray-200 rounded-xl p-4 min-h-96 w-full lg:w-2/3'>
              <p className='text-2xl font-bold mb-4'>Order History</p>

              <div className='space-y-3 overflow-y-auto h-80'>
                {orders.map((order) => (
                  <div key={order.id} className='border border-gray-200 rounded-xl p-4'>
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-1'>
                      <p className='font-bold'>Order #{order.id}</p>

                      <p className='text-green-500 font-semibold'>{new Date(order.placed_on).toLocaleDateString()}</p>
                    </div>

                    <p className='font-bold mt-2'>₹{order.total_price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {openLogout && (<Logout setOpenLogout={setOpenLogout} />)}
    </>
  )
}

export default Profile

