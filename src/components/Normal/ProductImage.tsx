export function Image({ url }: { url: string}) {
    return (
        <div className='w-full h-96'>
            <img src={url} alt='product' className='w-full h-full object-cover'/>
        </div>
    )
}