import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import Item from '../components/Item'
import { AnimatePresence } from 'motion/react'
import Auth from '../components/Auth'

const Menu = ({ openModel, model,setModel,setOpenModel}) => {
  const [items, setItems] = useState([])

  const [selectedItem,setSelectedItem] = useState(null)

  const get_items = async () => {
    try {
      const response = await api.get('food-items/')
      console.log(response.data);
      setItems(response.data)
    } catch (error) {
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    get_items()
  }, [])

  if(items.length===0){
    return(
      <div className='flex items-center justify-center min-h-[80vh]'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <div className='mt-16 px-4 md:px-8 lg:px-12'>
        {items.map((category, id) => (
          <div key={id} className='mb-10'>
            <h2 className='text-2xl font-bold pt-4 mb-5 text-gray-800'>{category.category_name}</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
              {category.food_items.map((food, id) => (
                <div key={id} className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
                  <img onClick={()=>{setOpenModel(true),setModel('item'),setSelectedItem(food.id)}} src={food.image} alt={food.name} className='hover:cursor-pointer w-full h-52 object-cover'/>
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
          </div>
        ))}

        { openModel && model==='item' && <Item setOpenModel={setOpenModel} item={selectedItem} />}

        <AnimatePresence>
            {openModel && model === 'user' && <Auth setOpenModel={setOpenModel} />}
          </AnimatePresence>
      </div>
    </>
  )
}

export default Menu