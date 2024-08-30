import { useProductCardContext } from "./CardContext";

export function Title() {
    const { product } = useProductCardContext();
    return <p className='font-bold text-3xl'>{product.title}</p>
}