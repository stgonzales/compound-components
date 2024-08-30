import { createContext, useContext } from 'react';
import { Product } from '../../../schema';

const ProductCardContext = createContext<{ product: Product } | null>(null);

export function useProductCardContext() {
    const context = useContext(ProductCardContext);

    if (!context) {
        throw new Error(
            'childrens components (Action, Description, Image, Info, Price, Rating, Title) must be used within a Card component'
        );
    }

    return context;
}

export default ProductCardContext;