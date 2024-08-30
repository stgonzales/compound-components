import { Product } from './schema/index'
import { CardNormal } from './components/Normal/ProductCard'
import { CardRaw } from './components/Raw/ProductCard'
import Card from './components/Composable/Card/Card'

import { productComposable, productNormal, productRaw } from './mock'



function App() {

  const addToCart = (product: Product) => {
    console.log("Product add to cart!", product)
  }

  return (
    <div className='w-screen h-screen bg-gray-700 flex justify-center items-center gap-6'>
      <CardRaw {...productRaw}/>
      
      <CardNormal {...productNormal}/>

      <Card product={productComposable}>
        <Card.Image/>
        <Card.Info>
          <Card.Title/>
          <Card.Rating />
          <Card.Description />
          <Card.Price />
        </Card.Info>
        <Card.Action cb={addToCart}>ADD TO CART</Card.Action>
      </Card>
    </div>
  )
}

export default App
