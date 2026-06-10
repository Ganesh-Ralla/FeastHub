import React from 'react'
import biryani from '../assets/Biryani.png'
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
            <div className=' flex items-center justify-between gap-2'>
                {
                    categories.map((category, id) => {
                        return (
                            <div className=' flex flex-col items-center'>
                                <img src={category.image} className=' h-20 rounded-xl' alt="" />
                                <p>{category.name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Categories