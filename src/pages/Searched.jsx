import React, { useEffect, useState } from 'react'
import Items from '../components/Items'
import { AnimatePresence } from 'motion/react'
import Item from '../components/Item'
import api from '../api/axios'

const Searched = ({ searchInput, openModel, setOpenModel, model, setModel }) => {

  const [foods, setFoods] = useState([])

  const [selectedItem, setSelectedItem] = useState()
  const searchFood = async (searchInput) => {
    try {
      const response = await api.get(`food/search/?q=${searchInput}`)
      console.log(response.data);
      setFoods(response.data)
    } catch (error) {
      console.error(error.response.data);
    }
  }

  console.log('foods', foods);


  useEffect(() => {
    searchFood(searchInput)
  }, [searchInput])
  return (
    <>
      <div className=' mt-16 p-4 md:px-8 lg:px-12'>
        <p>Showing search results related to <span className=' text-orange-500 font-bold'>{searchInput}</span></p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {foods.map((food, id) => (
            <div key={id} className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <img onClick={() => { setOpenModel(true), setSelectedItem(food.id) }} src={food.image} alt={food.name} className='hover:cursor-pointer w-full h-52 object-cover' />
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
        {openModel && <Item setOpenModel={setOpenModel} item={selectedItem} />}
      </div>
    </>
  )
}

export default Searched