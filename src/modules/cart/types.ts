/* eslint-disable no-unused-vars */

import { Product } from '@/models'

export interface CartModuleViewsProps {
    cart: Product[]
    removeFromCartHandler: (id: number) => void
    getTotalCartPrice: (cart: Product[]) => number
}
