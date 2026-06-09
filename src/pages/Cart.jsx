import React from 'react'

const Cart = () => {
    return (
        <>
            <div className=' p-4 md:px-8 lg:px-12 mt-16'>
                <p>Cart</p>
                <p>Review your items and process to checkout</p>

                <div className=' flex gap-4 items-center justify-center'>
                    <div className=' border border-gray-200 rounded-xl p-2 w-1/2'>
                        <p className=' border-b border-gray-200 text-2xl font-bold'>Order Items</p>
                        <div>
                            items
                        </div>
                    </div>
                    <div className=' border border-gray-200 rounded-xl p-2 w-1/4'>
                        <p className=' border-b border-gray-200 text-2xl font-bold'>Order Summary</p>
                        <div>
                            <div className=' border-b border-gray-200'>
                                <p>Total Items : </p>
                                <p>Delivery :</p>
                            </div>
                            <div>
                                <p className=' font-bold'>Total Amount</p>
                                <p className='text-sm font-light'>Inclusive of all taxes</p>
                            </div>
                            <button className=' my-2 rounded-xl bg-green-500 p-2 font-bold text-center text-white w-full'>Proceed to Checkout</button>
                            <div className='mt-4 text-center p-2 bg-green-200 rounded-xl'>
                                <p className=' font-bold'>Safe & Secure Payments</p>
                                <p className=' font-light'>100% secure checkout experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart