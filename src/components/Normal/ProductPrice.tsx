export function Price({ price }: { price: number}) {
    return (
        <div className='font-bold text-2xl'>
            <p>£{price.toFixed(2)}</p>
        </div>
    )
}