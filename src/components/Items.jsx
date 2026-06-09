import React from 'react'
import biryani from '../assets/Biryani.png'
import { Plus } from 'lucide-react'
const Items = () => {

    const items = [
        { item: 'Biryani', image: `${biryani}`,price: 229,restaurant: 'Abhiruchi'},
        { item: 'Biryani', image: `${biryani}`,price: 229,restaurant: 'Abhiruchi'},
        { item: 'Biryani', image: `${biryani}`,price: 229,restaurant: 'Abhiruchi'},
        { item: 'Biryani', image: `${biryani}`,price: 229,restaurant: 'Abhiruchi'},
        { item: 'Biryani', image: `${biryani}`,price: 229,restaurant: 'Abhiruchi'},
        { item: 'Biryani', image: `${biryani}`,price: 229,restaurant: 'Abhiruchi'}  
    ]
    return (
        <>
            <div className=' my-4'>
                <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                    {
                        items.map((item, id) => {
                            return (
                                <div key={id}  className=' border border-gray-200 rounded-xl'>
                                    <img src={item.image} alt="" className=' rounded-t-xl' />
                                    <div className=' p-2'>
                                        <p className=' font-bold'>{item.item}</p>
                                        <p className=' text-sm text-gray-500'>{item.restaurant}</p>
                                        <span className=' flex items-center justify-between'><p className=' font-bold'>₹ {item.price}</p> <Plus className=' bg-orange-500 rounded-lg' size={24} color='white'/> </span>
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