import React from 'react'
import biryani from '../assets/biryani-png.png'
const Categories = () => {
    const categories = [
        { image: `${biryani}`, name: 'Biryani' },
        { image: `${biryani}`, name: 'Biryani' },
        { image: `${biryani}`, name: 'Biryani' },
        { image: `${biryani}`, name: 'Biryani' },
        { image: `${biryani}`, name: 'Biryani' },
        { image: `${biryani}`, name: 'Biryani' }
    ]
    return (
        <>
            <div className=' flex items-center justify-between gap-2 overflow-x-auto'>
                {
                    categories.map((category, id) => {
                        return (
                            <div className=' flex flex-col items-center '>
                                <img src={category.image} className=' h-auto md:h-40 w-full rounded-full hover:cursor-pointer object-contain ' alt="" />
                                <p className=' font-semibold text-sm md:text-lg'>{category.name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Categories