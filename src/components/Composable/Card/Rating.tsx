import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useProductCardContext } from './CardContext';

export function Rating() {
    const { product } = useProductCardContext();

    return (
        <div className="flex text-yellow-500 justify-center gap-1">
        {[1, 2, 3, 4, 5].map((i) =>
            i <= product.rating ? (
            <AiFillStar key={i} />
            ) : (
            <AiOutlineStar key={i} />
            )
        )}
        </div>
    )
}