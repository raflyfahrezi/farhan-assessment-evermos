import create from 'zustand'

import { Product } from '@/models'

import { ZustandState } from './types'
import { setCart, setIsNavigationScrolled } from './helpers'

const zustand = create<ZustandState>((set) => ({
    cart: [],
    isNavigationScrolled: false,

    setCart: (cart: Product[]) => setCart(set, cart),
    setIsNavigationScrolled: (isNavigationScrolled: boolean) =>
        setIsNavigationScrolled(set, isNavigationScrolled),
}))

export default zustand
