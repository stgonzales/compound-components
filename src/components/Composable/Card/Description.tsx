import { useProductCardContext } from "./CardContext";

export function Description() {
    const { product } = useProductCardContext();

    return <p>{product.description}</p>
}