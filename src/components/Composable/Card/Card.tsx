import { ReactNode } from 'react'
import ProductCardContext from './CardContext'
import { Product } from '../../../schema'

// import { Action, Description, Image, Info, Price, Rating, Title } from '.'
import { Image } from './Image'
import { Title } from './Title'
import { Description } from './Description'
import { Price } from './Price'
import { Rating } from './Rating'
import { Action } from './Action'
import { Info } from './Info'

type Props = {
  product: Product
  children: ReactNode
}

export default function Card({ children, product }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className='w-96 rounded-xl flex flex-col justify-center overflow-hidden bg-blue-50 hover:scale-105 hover:cursor-pointer transition-transform'>
        {children}
      </div>
    </ProductCardContext.Provider>
  )
}

Card.Image = Image
Card.Title = Title
Card.Description = Description
Card.Price = Price
Card.Rating = Rating
Card.Action = Action
Card.Info = Info