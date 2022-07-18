import React from 'react'

import { Product } from '@/models'

import CartModuleViews from './views'

const CartModule = () => {
    const getTotalCartPrice = (cart: Product[]) => {
        return cart.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    }

    return <CartModuleViews getTotalCartPrice={getTotalCartPrice} />
}

export default CartModule
