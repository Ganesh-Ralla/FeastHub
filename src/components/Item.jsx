import React, { useContext, useEffect, useState } from 'react'
import biryani from '../assets/Biryani.png'
import { Star, X } from 'lucide-react'
import { toast } from 'react-toastify'
import { easeInOut, motion } from 'motion/react'
import api from '../api/axios'
import { AuthContext } from '../context/AuthContext'

const Item = ({ setOpenModel, item }) => {

  const [food, setFood] = useState()

  const { isLoggedIn } = useContext(AuthContext)

  const get_food_item = async (item) => {
    try {
      const response = await api.get(`food-items/${item}`)
      console.log(response.data);
      setFood(response.data)

    } catch (error) {
      console.error(error.response.data);

    }
  }

  useEffect(() => {
    get_food_item(item)
  }, [item])

  const accessToken = localStorage.getItem('accessToken')
  const addToCart = async () => {
    if (!isLoggedIn) {
      toast.warning("Login is required..", {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true
      })

    } else {
      try {
        const response = await api.post('cart/add-to-cart/', {food_items:item}, { headers: { Authorization: `Bearer ${accessToken}` } })
        console.log(response.data);

        toast.success("Added to cart..", {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true
        })

      } catch (error) {
        console.error(error.response.data);

      }

    }


  }

  if (!food) {
    return (
      <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
        <p className='bg-white p-4 rounded-xl'>Loading...</p>
      </div>
    )
  }
  return (
    <>
      <div className=' flex justify-center items-center min-h-screen fixed w-full z-10 inset-0 bg-black/50'>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: easeInOut }} exit={{ y: 20, opacity: 0 }}
          className=' w-xs md:w-lg lg:w-1/2 p-4 lg:flex  '>
          <div className=' w-full relative '>
            <div className=' absolute right-4 top-4 p-1  bg-white rounded-full'>
              <X size={18} onClick={() => { setOpenModel(false) }} className=' hover:cursor-pointer' />
            </div>
            <img src={food.image} alt="" className=' h-52 md:h-100 w-full object-cover rounded-t-xl lg:rounded-t-none lg:rounded-l-xl' />
          </div>

          <div className=' p-4 bg-white rounded-b-xl lg:rounded-b-none lg:rounded-r-xl lg:rounded-br-xl'>
            <p className=' font-bold text-orange-500'>Bestseller</p>
            <p className=' flex justify-between'>
              <span className=' text-2xl font-bold '>{food.name} </span>
              <button onClick={addToCart} className='hover:cursor-pointer font-bold text-green-500 py-2 px-4 border rounded-xl border-green-500'>ADD</button>
            </p>
            <p className=' font-bold'>₹ {food.price} </p>
            <p className=' text-green-500 font-bold flex items-center gap-1'> <Star size={18} /> <span>{food.rating}</span>  </p>
            <p>{food.description}</p>

          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Item