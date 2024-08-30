import { Product } from "../../schema";

export function Description({ description }: { description: Pick<Product, 'description'>['description']}) {
    return <p>{description}</p>
}