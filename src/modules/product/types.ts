import { Product } from '@/models'

export interface ProductModuleProps {
    product: Product
}

export interface ProductModuleViewsProps {
    product: Product
    addToCartHandler: () => void
    removeFromCartHandler: () => void
    checkIfItemExistInCart: () => boolean
}
