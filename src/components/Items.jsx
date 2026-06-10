import React from 'react'
import biryani from '../assets/Biryani.png'
import { Plus } from 'lucide-react'
const Items = ({ setOpenModel, setModel }) => {

    const items = [
        { item: 'Biryani', image: `${biryani}`, price: 229 },
        { item: 'Biryani', image: `${biryani}`, price: 229 },
        { item: 'Biryani', image: `${biryani}`, price: 229 },
        { item: 'Biryani', image: `${biryani}`, price: 229 },
        { item: 'Biryani', image: `${biryani}`, price: 229 },
        { item: 'Biryani', image: `${biryani}`, price: 229 }
    ]
    return (
        <>
            <div className=' my-4'>
                <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                    {
                        items.map((item, id) => {
                            return (
                                <div key={id} className=' border border-gray-200 rounded-xl'>
                                    <img src={item.image} alt="" className=' rounded-t-xl hover:cursor-pointer' onClick={() => { setModel('item'), setOpenModel(true) }} />
                                    <div className=' p-2'>
                                        <div className='flex items-center justify-between'>
                                            <p className=' font-bold'>{item.item}</p>
                                            <p>₹320</p>
                                        </div>
                                        <p>Serves : 1</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Items