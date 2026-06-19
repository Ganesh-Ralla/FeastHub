import React from 'react'

const Payment = () => {
  return (
    <>
    <div className=' fixed inset-0 z-10 flex items-center justify-center bg-black/50'>
        <div className=' border border-gray-200 rounded-xl p-4 bg-white w-1/2'>
                <p className=' text-xl font-bold'>Order summary</p>
            <div className=' flex items-center justify-between px-8'>
                
                <div>
                    items list
                </div>
                <div>
                    Payment scan
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Payment