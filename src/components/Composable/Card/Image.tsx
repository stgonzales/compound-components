import { useProductCardContext } from "./CardContext";

export function Image() {
    const { product } = useProductCardContext();

    return (
        <div className='w-full h-96'>
            <img src={product.image} alt='product' className='w-full h-full object-cover'/>
        </div>
    )
}