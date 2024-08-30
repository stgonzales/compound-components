import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Rating({ stars }: {stars:number}) {
    return (
        <div className="flex text-yellow-500 justify-center gap-1">
        {[1, 2, 3, 4, 5].map((i) =>
            i <= stars ? (
            <AiFillStar key={i} />
            ) : (
            <AiOutlineStar key={i} />
            )
        )}
        </div>
    )
}