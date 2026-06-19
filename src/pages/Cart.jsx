import React, { useEffect, useState } from 'react'
import { AnimatePresence } from "motion/react"
import Auth from '../components/Auth'
import biryani from '../assets/Biryani.png'
import { ChefHat, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'
import api from '../api/axios'
import empty_cart from '../assets/empty_cart.png'
import { useNavigate } from 'react-router-dom'
import Payment from '../components/Payment'

const Cart = ({ openModel, setOpenModel }) => {

    const navigate = useNavigate()
    const [cart, setCart] = useState({
        cart_items: []
    })

    const accessToken = localStorage.getItem('accessToken')

    const get_cart_items = async () => {
        try {
            const response = await api.get('cart/', { headers: { Authorization: `Bearer ${accessToken}` } })
            setCart(response.data)
            console.log("cart Data", response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    // console.log(cart.cart_items[0].food_items.name);
    const items = cart?.cart_items
    console.log(cart.cart_items);

    useEffect(() => {
        get_cart_items()
    }, [])


    const update_quantity = async (id, quantity) => {
        try {
            const response = await api.put(`cart/item/update-quantity/${id}`, { quantity }, { headers: { Authorization: `Bearer ${accessToken}` } })
            console.log(response.data);
            get_cart_items()
        } catch (error) {
            console.error(error.response.data);
        }
    }

    const total_items = items.reduce((total, item) => total + item.quantity, 0)
    console.log(total_items);
    const total_price = items.reduce((total, item) => total + Number(item.q_price), 0)


    const placeOrder = async () => {
        try {
            const response = await api.post('order/place-order', {}, { headers: { Authorization: `Bearer ${accessToken}` } })
            console.log(response.data);
            toast.success("Order placed. Will be delivered soon..", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: true
            })
            // navigate('/cart')
            get_cart_items()

        } catch (error) {
            console.error(error.response.data);
        }


    }

    const handlePayment = async () => {
        try {
            const response = await api.post('create-order/', { amount: total_price }, { headers: { Authorization: `Bearer ${accessToken}` } })

            const order = response.data

            const options = {
                key: 'rzp_test_T3KS2nk6rgnGnw', // your test key
                amount: order.amount,
                currency: order.currency,
                name: 'FeastHub',
                description: 'Food Order',
                order_id: order.id,

                handler: async function (response) {
                    console.log(response)
                    try {
                        await placeOrder()
                        toast.success("payment success")
                    } catch (error) {
                        console.error(error)
                        toast.error("Order creation failed")
                    }

                }
            }

            const razorpay = new window.Razorpay(options)
            razorpay.open()


        } catch (error) {
            console.error(error)
        }
    }

    if (items.length === 0) {
        return (
            <div className=' mt-16 p-4 md:px-8 lg:px-12'>
                <div className=' flex flex-col items-center justify-center min-h-[80vh]'>
                    <img src={empty_cart} alt="" className=' h-100' />
                    <div className=' text-center'>
                        <p className=' font-bold text-3xl'>Your cart is empty</p>
                        <p className=' text-gray-400 '>Looks like you haven't added <br /> anything yet.</p>
                        <p className=' flex items-center justify-center text-gray-400'><ChefHat size={34} /></p>
                        <p className=' text-gray-400'>Add items from the menu to get started</p>
                    </div>
                </div>
            </div>
        )
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
                            <div className='  w-full '>
                                {
                                    items?.map((item, id) => {
                                        return (
                                            <div key={id} className='mb-3 w-full flex justify-between items-center '>
                                                <div className=' flex gap-2 items-center'>
                                                    <img key={id} src={item?.food_details?.image} className=' h-20 w-20 rounded-xl object-cover' alt="biryani" />
                                                    <div>
                                                        <p>{item?.food_details?.name}</p>
                                                        <p>₹{item?.food_details?.price}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className=' flex gap-2 items-center text-lg  border p-2 border-gray-300 rounded-xl'>
                                                        <button onClick={() => { update_quantity(item.id, item.quantity - 1) }} className=' px-4'>-</button>
                                                        <p className='  font-bold'>{item.quantity}</p>
                                                        <button onClick={() => { update_quantity(item.id, item.quantity + 1) }} className=' px-4'>+</button>
                                                    </div>

                                                </div>
                                                <div className=' flex items-center gap-2'>
                                                    <p className=' font-bold text-lg'>₹{item.q_price}</p>
                                                    <p className=' text-gray-500'><Trash2 size={20} /></p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                    <div className=' border border-gray-200 rounded-xl p-4 w-md'>
                        <p className=' border-b border-gray-200 text-2xl font-bold my-2'>Order Summary</p>
                        <div>
                            <div className=' border-b border-gray-200'>
                                <p className=' my-2'>Total Items : {total_items} </p>
                                <p className=' flex items-center justify-between my-2'><span>Delivery :</span> <span className=' font-bold text-green-500'>FREE</span></p>
                            </div>
                            <div className=' my-4'>
                                <p className=' font-bold flex items-center justify-between'><span>Total Amount :</span> <span>₹{total_price}</span></p>
                                <p className='text-sm font-light'>Inclusive of all taxes</p>
                            </div>
                            <button onClick={handlePayment} className='hover:cursor-pointer my-2 rounded-xl bg-green-500 p-2 font-bold text-center text-white w-full'>Proceed to Checkout</button>
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

            {/* <Payment /> */}
        </>
    )
}

export default Cart