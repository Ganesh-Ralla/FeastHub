import React from 'react'
import biryani from '../assets/Biryani.png'
import { Star, X } from 'lucide-react'
import { toast } from 'react-toastify'
import { easeInOut, motion } from 'motion/react'

const Item = ({ setOpenModel }) => {
  const addToCart = () => {
    toast.success("Added to cart..",{
      position:'top-center',
      autoClose:3000,
      hideProgressBar:true
    })
  }
  return (
    <>
      <div className=' flex justify-center items-center min-h-screen fixed w-full z-10 inset-0 bg-black/50'>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: easeInOut }} exit={{ y: 20, opacity: 0 }}
          className=' w-xs md:w-lg lg:w-1/4 p-4 '>
          <div className=' w-full relative '>
            <div className=' absolute right-4 top-4 p-1  bg-white rounded-full'>
              <X size={18} onClick={() => { setOpenModel(false) }} className=' hover:cursor-pointer' />
            </div>
            <img src={biryani} alt="" className=' h-52 md:h-100 w-full object-cover rounded-t-xl' />
          </div>

          <div className=' p-4 bg-white rounded-b-xl'>
            <p className=' font-bold text-orange-500'>Bestseller</p>
            <p className=' flex justify-between'>
              <span className=' text-2xl font-bold '>Chicken Biryani </span>
              <button onClick={addToCart} className='hover:cursor-pointer font-bold text-green-500 py-2 px-4 border rounded-xl border-green-500'>ADD</button>
            </p>
            <p className=' font-bold'>₹ 370 </p>
            <p className=' text-green-500 font-bold flex items-center gap-1'> <Star size={18} /> <span>4.2</span>  </p>
            <p>Aromatic basmati rice cooked with tender chicken, spices, herbs and saffron</p>

          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Item