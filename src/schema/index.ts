import z from 'zod'

export const productSchema = z.object({
    id: z.number(),
    title: z.string().max(24),
    description: z.string().max(50),
    image: z.string(),
    price: z.number().min(1),
    rating: z.number().min(0).max(5),
})

export type Product = z.infer<typeof productSchema>