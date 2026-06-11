import { ArrowRight, CakeSlice, Clock, CookingPot, Hamburger, Mail, MapPin, Phone, Pizza } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className=' p-4 md:px-8 lg:px-12 bg-orange-100'>
        <div className=' my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-start gap-4'>
          <div>
            <p className=' text-3xl font-bold'><span>Feast</span><span className=' text-orange-500'>Hub</span></p>
            <p className='my-2 '>Delicious food delivered fast to your doorsteps. Enjoy your favourite meals</p>
            <div>
              Social Media icons
            </div>
          </div>

          <div>
            <p className=' text-orange-500 font-semibold text-lg'>Quick Links</p>
            <div>
              <p className=' flex items-center gap-2'> <ArrowRight size={16} className=' text-orange-500' /><Link to='/'>Home</Link> </p>
              <p className=' flex items-center gap-2'> <ArrowRight size={16} className=' text-orange-500' /><Link to='/about'>About</Link> </p>
            </div>
          </div>

          <div>
            <p className=' text-orange-500 font-semibold text-lg'>Popular Items</p>
            <div>
              <p className=' flex items-center gap-2'> <CookingPot size={18} className='text-orange-500' /><span>Biryani</span> </p>
              <p className=' flex items-center gap-2'> <Pizza size={18} className='text-orange-500' /><span>Pizza</span> </p>
              <p className=' flex items-center gap-2'> <Hamburger size={18} className='text-orange-500' /><span>Burger</span> </p>
              <p className=' flex items-center gap-2'> <CakeSlice size={18} className='text-orange-500' /><span>Dessert</span> </p>
            </div>
          </div>

          <div>
            <p className=' text-orange-500 font-semibold text-lg'>Contact us</p>
            <div>
              <div>
                <p className=' flex items-center gap-2'><MapPin size={18} className='text-orange-500'  /><span>123 Food Street,Hyderabad</span></p>
                <p className=' flex items-center gap-2'><Phone size={18} className='text-orange-500'  /><span>+91 123456789</span></p>
                <p className=' flex items-center gap-2'><Mail size={18} className='text-orange-500'  /><span>feasthub.team@gmail.com</span></p>
                <p className=' flex items-center gap-2'><Clock size={18} className='text-orange-500'  /><span>Mon - Sat : 8:00 AM - 11:00 PM</span></p>


              </div>
            </div>
          </div>

          <div>
            <p className=' text-orange-500 font-semibold text-lg'>News Letter</p>
            <div>
              <p className=''>Subscribe to get the latest offers and updates delivered to you</p>
              <div className=' flex flex-col gap-3'>
                <input type="text" placeholder='Enter your email' className=' text-black p-2 rounded-xl border outline-0 border-gray-400' />
                <button className=' bg-orange-500 rounded-xl font-bold text-white p-2'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className=' my-4'>
          <hr />
          <p className=' mt-2 text-center'>FeastHub @2026. All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer