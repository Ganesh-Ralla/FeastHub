import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
// Replace these with your offer images
import offer1 from "../assets/offer1.png"
import offer2 from "../assets/offer2.png"
import offer3 from "../assets/offer3.png"
import offer4 from "../assets/offer4.png"

const offers = [
  { id: 1, image: offer1, alt: "First 3 orders free delivery" },
  { id: 2, image: offer2, alt: "Use code APP30 for 30% off weekend specials" },
  { id: 3, image: offer3, alt: "Order above 299 get dessert free" },
  { id: 4, image: offer4, alt: "New launch mocktails Jigger Bomb and Berry Blast" },
]


const OfferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offers.length)
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden   ">
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        {offers.map((offer) => (
          <div key={offer.id} className="min-w-full flex items-center ">
            <img
              src={offer.image}
              alt={offer.alt}
              className="w-full lg:h-125 lg:object-contain "
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-6 bg-orange-500" : "w-2 bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
export default OfferSlider

