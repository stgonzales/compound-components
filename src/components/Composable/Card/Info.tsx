import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Info({ children }: Props) {
    return (
        <>
            <div className='py-4 px-4 text-center flex flex-col gap-4 justify-center'>
                {children}
            </div>
        </>
    )
}