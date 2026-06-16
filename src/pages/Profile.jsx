import React, { useEffect, useState } from 'react'
import api from '../api/axios'

const Profile = () => {

  const [user,setUser] = useState({})

  const accessToken = localStorage.getItem('accessToken')

  const getUserProfile= async()=>{
    try{
      const response = await api.get('profile/',{headers: { Authorization: `Bearer ${accessToken}`}} )
      console.log(response.data);
      setUser(response.data)
      
    }catch(error){
      console.error(error.response.data);
    }
  }

  useEffect(()=>{
    getUserProfile()
  },[])
  return (
    <>
    <div className=' mt-16 p-4 md:px-8 lg:px-12'>
      {user.first_name} {user.last_name}
    </div>
    </>
  )
}

export default Profile