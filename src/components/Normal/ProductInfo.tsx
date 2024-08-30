import { Product } from "../../schema";
import { Title } from "./ProductTitle";
import { Description } from "./ProductDescription";
import { Rating } from "./ProductRating";
import { Price } from "./ProductPrice";

type Props = Omit<Product, 'id'| 'image'>

export function Info({ title, description, rating, price }: Props) {
    return (
        <>
            <Title title={title}/>
            <Description description={description}/>
            <Rating stars={rating}/>
            <Price price={price}/>
        </>
    )
}