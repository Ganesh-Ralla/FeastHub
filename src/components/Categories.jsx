import React from 'react'
import beverages from '../assets/beverages.png'
import desserts from '../assets/dessert.png'
import pizza from '../assets/pizza.png'
import biryani from '../assets/Biryani.png'
import maincourse from '../assets/maincourse.png'
import soups from '../assets/soup.png'
import starter from '../assets/starter.png'


const Categories = ({ setCategory }) => {
    const categories = [
        { image: `${starter}`, name: 'Starters' },
        { image: `${soups}`, name: 'Soups' },
        { image: `${maincourse}`, name: 'MainCourse' },
        { image: `${biryani}`, name: 'Biryani' },
        { image: `${pizza}`, name: 'Pizza' },
        { image: `${desserts}`, name: 'Desserts' },
        { image: `${beverages}`, name: 'Beverages' }
    ]
    return (
        <>
            <div className='flex gap-4 overflow-x-auto lg:justify-evenly scrollbar-hide pb-2'>
                {categories.map((category, id) => (
                    <div key={id} onClick={() => setCategory(category.name)} className='shrink-0 flex flex-col items-center cursor-pointer'>
                        <div className='bg-orange-200 p-3 md:p-4 rounded-full'>
                            <img src={category.image} className='h-10 w-10 md:h-14 md:w-14 object-contain' alt={category.name}/>
                        </div>

                        <p className='mt-2 text-xs md:text-base font-semibold text-center whitespace-nowrap'>{category.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Categories