import React, { useContext, useEffect, useState } from 'react'
import api from '../api/axios'
import { Box, Edit, Lock, LogOut, Mail, PenIcon, Star, User, X } from 'lucide-react'
import emptyuser from '../assets/empty-user.png'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setOpenLogout }) => {
  const { setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const logout = async () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/')

  }
  return (
    <>
      <div className=' fixed inset-0 z-10 flex items-center justify-center bg-black/50'>
        <div className=' border text-center bg-white border-gray-200 rounded-xl p-4 min-h-56 w-72'>
          <p onClick={() => { setOpenLogout(false) }} className='hover:cursor-pointer flex items-center justify-end'><X /></p>
          <div className=' flex flex-col justify-around my-4'>
            <p className=' font-bold text-2xl'>Are You sure ?</p>
            <p>want to logout</p>
            <div className=' flex items-center justify-around p-4'>
              <button onClick={logout} className=' hover:cursor-pointer font-bold border border-gray-200 bg-red-500 py-2 px-4 rounded-xl text-white'>Yes</button>
              <button onClick={() => { (setOpenLogout(false)) }} className=' hover:cursor-pointer font-bold border border-gray-200 bg-green-500 py-2 px-4 rounded-xl text-white'>No</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
const Profile = () => {

  const [user, setUser] = useState({})

  const [openLogout, setOpenLogout] = useState(false)



  const accessToken = localStorage.getItem('accessToken')

  const getUserProfile = async () => {
    try {
      const response = await api.get('profile/', { headers: { Authorization: `Bearer ${accessToken}` } })
      console.log(response.data);
      setUser(response.data)

    } catch (error) {
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  const [orders, setOrders] = useState([])
  const order_history = async () => {
    try {
      const response = await api.get('order/history', { headers: { Authorization: `Bearer ${accessToken}` } })
      console.log('orders', response.data);
      setOrders(response.data)
    } catch (error) {
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    order_history()
  }, [])


  return (
    <>
      <div className=' mt-16 p-4 md:px-8 lg:px-12'>
        <div className=' flex justify-between items-center'>
          <div>
            <p className=' text-2xl font-bold'>My Profile</p>
            <p className=' text-sm text-gray-500'>Manage your account information and preferences</p>
          </div>
          <div onClick={() => setOpenLogout(true)} className='hover:cursor-pointer flex gap-2 items-center bg-orange-500 p-2 text-white rounded-xl'>
            <LogOut size={20} /><p>Logout</p>
          </div>
        </div>

        <div>
          <div className=' border border-gray-200 rounded-xl p-2 my-4 flex items-center justify-between px-12'>
            <div className=' flex items-center gap-4'>
              <img src={emptyuser} alt="" className=' h-36 p-2' />
              <div className=''>
                <p className=' text-xl font-bold'>{user.first_name} {user.last_name}</p>
                <p className='text-gray-500 flex items-center gap-2'><Mail size={20} /> {user.email}</p>
              </div>
            </div>

            <div className='flex  bg-orange-100 rounded-xl p-2'>
              <div className=''>
                <p className=' font-bold'>FeastHub Points</p>
                <p className=' text-2xl font-bold text-orange-500'>120</p>
                <p className=' text-gray-500 text-sm'>Place more orders to earn <br /> exciting rewards!</p>
              </div>
              <Star className=' text-orange-500 bg-orange-200 p-2 rounded-full ' size={34} />
            </div>
          </div>
        </div>


        <div className=' flex items-start  gap-8  '>
          <div className=' border border-gray-200 rounded-xl p-4 w-1/3'>
            <p className=' text-2xl font-bold mb-4'>Account Information</p>
            <div className=' flex flex-col justify-around'>
              <div className=' flex items-center justify-between border-b border-gray-300 py-2'>
                <p className=' flex items-center gap-2 text-gray-500 '><User size={18} /> Full Name</p>
                <p className=' font-bold'>{user.first_name} {user.last_name} </p>
              </div>
              <div className=' flex items-center justify-between border-b border-gray-300 py-2'>
                <p className=' flex items-center gap-2 text-gray-500 '><Mail size={18} /> Email</p>
                <p className=' font-bold'>{user.email}  </p>
              </div>
              <div className=' flex items-center justify-between border-b border-gray-300 py-2'>
                <p className=' flex items-center gap-2 text-gray-500 '><User size={18} /> Username</p>
                <p className=' font-bold'>{user.username}  </p>
              </div>
              <div className=' flex items-center justify-between border-b border-gray-300 py-2'>
                <p className=' flex items-center gap-2 text-gray-500 '><Lock size={18} /> Password</p>
                <p className=' font-bold'>*****  </p>
              </div>

              <div className=' flex gap-2 items-center justify-center mt-4 bg-orange-500 p-2 text-white rounded-xl'>
                <PenIcon size={20} /><p>Edit Profile</p>
              </div>
            </div>
          </div>

          {
            orders.length === 0 ? (
              <div className='border border-gray-200 rounded-xl p-4 h-96 w-2/3 flex items-center justify-center'>
                <div className=' flex flex-col items-center'>
                  <Box size={50} />
                  <p className='font-bold text-lg'>No orders yet</p>
                  <p className=' text-gray-400'>Your past orders will show up here once you place one</p>
                </div>
              </div>
            ) : (
              <div className='border border-gray-200 rounded-xl p-4 h-96 w-2/3'>
                <p className='text-2xl font-bold mb-4'>Order History</p>

                <div className='space-y-3 overflow-y-auto h-80'>
                  {orders.map((order) => (
                    <div key={order.id} className='border border-gray-200 rounded-xl p-4'>
                      <div className='flex justify-between'>
                        <p className='font-bold'>Order #{order.id}</p>
                        <p className='text-green-500 font-semibold'>
                          {new Date(order.placed_on).toLocaleDateString()}
                        </p>
                      </div>

                      <p className='font-bold mt-2'>₹{order.total_price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        </div>

      </div>
      {openLogout && <Logout setOpenLogout={setOpenLogout} />}
    </>
  )
}

export default Profile