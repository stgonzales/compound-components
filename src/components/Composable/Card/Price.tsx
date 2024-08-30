import { useProductCardContext } from "./CardContext";

export function Price() {
    const { product } = useProductCardContext();

    return (
        <div className='font-bold text-2xl'>
            <p>£{product.price.toFixed(2)}</p>
        </div>
    )
}