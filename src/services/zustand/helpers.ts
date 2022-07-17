import { Product } from '@/models'

export const setCart = (set: any, value: Product[] | []) =>
    set(() => ({ cart: value }))

export const setIsNavigationScrolled = (set: any, value: boolean) =>
    set(() => ({ isNavigationScrolled: value }))
