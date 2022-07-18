import React from 'react'

import { zustand } from '@/services'

import CartModuleViews from './views'

const CartModule = () => {
    const state = {
        cart: zustand((zustandState) => zustandState.cart),
        setCart: zustand((zustandState) => zustandState.setCart),
    }

    const getTotalCartPrice = () => {
        return state.cart.reduce((acc, item) => {
            return acc + item.price
        }, 0)
    }

    const removeCartItemHandler = (id: number) => {
        const newCart = state.cart.filter((item) => item.id !== id)

        state.setCart(newCart)
    }

    return (
        <CartModuleViews
            cart={state.cart}
            getTotalCartPrice={getTotalCartPrice}
            removeFromCartHandler={removeCartItemHandler}
        />
    )
}

export default CartModule
