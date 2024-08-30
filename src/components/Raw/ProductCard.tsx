import { Product } from '../../schema/index'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function CardRaw(details: Product) {
  const handleClick = () => {
    console.log("added to cart!")
  }

  return (
    <div className='w-96 rounded-xl overflow-hidden bg-blue-50 hover:scale-105 transition-transform'>
        <div className='w-full h-96'>
            <img src={details.image} alt='product' className='w-full h-full object-cover'/>
        </div>
        <div className='py-4 px-4 text-center flex flex-col gap-4'>
            <p className='font-bold text-3xl'>{details.title}</p>
            <p>{details.description}</p>
            <div className="flex text-yellow-500 justify-center gap-1">
            {[1, 2, 3, 4, 5].map((i) =>
                i <= details.rating ? (
                <AiFillStar key={i} />
                ) : (
                <AiOutlineStar key={i} />
                )
            )}
            </div>
            <p className='font-bold text-2xl'>£{details.price.toFixed(2)}</p>
            <div className='w-full pt-4 px-4'>
              <button 
                type="button" 
                onClick={handleClick} 
                className="bg-blue-700 my-4 w-full border-none rounded-lg py-4 px-6 text-lg font-semibold text-white hover:bg-blue-500 transition-colors shadow-gray-500 shadow-sm">
                ADD TO CART
              </button>
            </div>
        </div>
    </div>
  )
}