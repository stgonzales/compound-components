import { Product } from '../../schema/index'
import { Info } from './ProductInfo'
import { Image } from './ProductImage'
import { Button } from './ProductButton'

export function CardNormal(details: Product) {
  return (
    <div className='w-96 flex flex-col rounded-xl overflow-hidden bg-blue-50 hover:scale-105 hover:cursor-pointer transition-transform'>
        <Image url={details.image}/>
        <div className='py-8 px-4 text-center flex flex-col gap-4 justify-center'>
          <Info 
            title={details.title} 
            description={details.description}
            price={details.price}
            rating={details.rating} 
          />
        </div>
        <Button cb={() => console.log("added to cart!")}>ADD TO CART</Button>
    </div>
  )
}