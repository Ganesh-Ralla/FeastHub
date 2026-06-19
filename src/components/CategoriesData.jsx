import React, { useEffect, useState } from 'react'
import api from '../api/axios'

const CategoriesData = ({ category ,setModel,setOpenModel,setSelectedItem}) => {

    const [category_data, setCategory_data] = useState([])

    const get_category_data = async (category) => {
        try {
            const response = await api.get(`food/category/?q=${category}`)
            console.log(response.data);
            setCategory_data(response.data)

        } catch (error) {
            console.error(error.response.data);

        }
    }

    useEffect(() => {
        get_category_data(category)
    }, [category])

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {category_data.map((food, id) => (
                    <div key={id} className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
                        <img onClick={() => { setOpenModel(true),setModel('item'), setSelectedItem(food.id) }} src={food.image} alt={food.name} className=' hover:cursor-pointer w-full h-52 object-cover' />
                        <div className='p-4'>
                            <div className='flex justify-between items-baseline'>
                                <h3 className='font-semibold text-lg text-gray-800'>{food.name}</h3>
                                <span className='font-bold text-orange-500'>₹{food.price}</span>
                            </div>

                            <p className='text-sm text-gray-500 mt-2 line-clamp-2'>{food.description}</p>


                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

export default CategoriesData