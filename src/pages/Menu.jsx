import React from 'react'
import Items from '../components/Items'
import { AnimatePresence } from 'motion/react'
import Item from '../components/Item'

const Menu = ({ searchInput,openModel,setOpenModel,model,setModel }) => {
  return (
    <>
      <div className=' mt-16 p-4 md:px-8 lg:px-12'>
        <p>Showing search results related to <span className=' text-orange-500 font-bold'>{searchInput}</span></p>
        <Items setModel={setModel} setOpenModel={setOpenModel} />

        <AnimatePresence>
          {openModel && model === 'item' && <Item setOpenModel={setOpenModel} />}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Menu