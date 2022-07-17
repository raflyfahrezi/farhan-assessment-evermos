/* eslint-disable no-unused-vars */

import { Product } from '@/models'

export interface ZustandState {
    cart: Product[]
    isNavigationScrolled: boolean

    setCart: (cart: Product[]) => void
    setIsNavigationScrolled: (isNavigationScrolled: boolean) => void
}
