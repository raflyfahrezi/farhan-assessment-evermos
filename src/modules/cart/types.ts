/* eslint-disable no-unused-vars */

import { Product } from '@/models'

export interface CartModuleViewsProps {
    getTotalCartPrice: (cart: Product[]) => number
}
