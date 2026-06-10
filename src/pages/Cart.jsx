import React, { useState } from 'react'
import { AnimatePresence } from "motion/react"
import Auth from '../components/Auth'
import biryani from '../assets/Biryani.png'
import { Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'
const Cart = ({ openModel, setOpenModel }) => {

    const [count,setCount] = useState(1)
    const [price,setPrice] = useState(370)

    const placeOrder = () => {
        toast.success("Order placed. Will be delivered soon..", {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true
        })
    }
    return (
        <>
            <div className=' p-4 md:px-8 lg:px-12 mt-16'>
                <p className=' font-bold text-3xl'>Cart</p>
                <p>Review your items and process to checkout</p>

                <div className=' mt-4 flex gap-4 items-start justify-around min-h-[80vh]'>
                    <div className=' border border-gray-200 rounded-xl p-2 w-1/2'>
                        <p className=' border-b border-gray-200 text-2xl font-bold'>Order Items</p>
                        <div className=' p-2 flex items-center justify-between'>
                            <div className=' flex items-center gap-4'>
                                <img src={biryani} alt="" className=' h-20 rounded-xl' />
                                <div>
                                    <p>Chicken Biryani</p>
                                    <p>₹{price}</p>
                                </div>
                            </div>
                            <div className=' text-xl border border-gray-200 rounded-xl '>
                                <button onClick={()=>{ if(count!=1){setCount(count-1)}}} className='hover:cursor-pointer p-2'>-</button>
                                <button className=' font-bold px-4'> {count} </button>
                                <button onClick={()=>{setCount(count+1)}} className='hover:cursor-pointer p-2'>+</button>
                            </div>
                            <div className=' flex items-center gap-2'>
                                <p>₹{count*price}</p>
                                <Trash2 size={18} />
                            </div>
                        </div>
                    </div>
                    <div className=' border border-gray-200 rounded-xl p-4 w-md'>
                        <p className=' border-b border-gray-200 text-2xl font-bold my-2'>Order Summary</p>
                        <div>
                            <div className=' border-b border-gray-200'>
                                <p className=' my-2'>Total Items : {count} </p>
                                <p className=' flex items-center justify-between my-2'><span>Delivery :</span> <span className=' font-bold text-green-500'>FREE</span></p>
                            </div>
                            <div className=' my-4'>
                                <p className=' font-bold flex items-center justify-between'><span>Total Amount :</span> <span>₹{count*price}</span></p>
                                <p className='text-sm font-light'>Inclusive of all taxes</p>
                            </div>
                            <button onClick={placeOrder} className='hover:cursor-pointer my-2 rounded-xl bg-green-500 p-2 font-bold text-center text-white w-full'>Proceed to Checkout</button>
                            <div className='mt-4 text-center p-2 bg-green-200 rounded-xl'>
                                <p className=' font-bold'>Safe & Secure Payments</p>
                                <p className=' font-light'>100% secure checkout experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {openModel && <Auth setOpenModel={setOpenModel} />}
            </AnimatePresence>
        </>
    )
}

export default Cart