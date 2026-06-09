import Auth from "../components/Auth"
import Main from "../components/Main"
import banner from '../assets/banner.png'
import discount1 from '../assets/discount1.png'
import Items from "../components/Items"
import { AnimatePresence } from "motion/react"

const Home = ({openAuth,setOpenAuth}) => {
  return (
    <>
    <div className=" mt-12 lg:mt-0 relative">
      <img src={banner} alt="" />
      <div className=" absolute px-4 md:px-8 lg:px-12 top-[30%] lg:top-[40%]">
        <p className=" font-bold text-xl md:text-5xl lg:text-6xl">Good Food</p>
        <p className=" font-bold text-2xl md:text-5xl lg:text-7xl text-orange-500">delivered fast</p>
        <p className=" text-xs md:text-lg text-gray-500 md:my-4">Order food from your favourite <br className=" lg:hidden" /> restaurant near you</p>
      </div>
    </div>

    <div className="  p-4 md:px-8 lg:px-12">
      <img src={discount1} className=" rounded-xl lg:hidden" alt="" />
      <div>
        <p className=" my-2 font-bold md:text-2xl">Popular Items</p>
        <Items/>
      </div>
      <AnimatePresence>
        {openAuth && <Auth setOpenAuth={setOpenAuth}/>}
      </AnimatePresence>
    </div>
    </>
  )
}

export default Home 