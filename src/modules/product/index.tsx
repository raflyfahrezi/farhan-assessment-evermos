import React from 'react'
import { useRouter } from 'next/router'

import { zustand } from '@/services'

import ProductViewsModule from './views'
import { ProductModuleProps } from './types'

const ProductModule = ({ product }: ProductModuleProps) => {
    const router = useRouter()

    const state = {
        cart: zustand((zustandState) => zustandState.cart),
        setCart: zustand((zustandState) => zustandState.setCart),
    }

    const addToCartHandler = () => {
        state.setCart([...state.cart, product])
    }

    const removeFromCartHandler = () => {
        const newCart = state.cart.filter((item) => item.id !== product.id)

        state.setCart(newCart)
    }

    const checkIfItemExistInCart = (): boolean => {
        const result = state.cart.find((item) => item.id === product.id)

        if (result) {
            return true
        }

        return false
    }

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <ProductViewsModule
            product={product}
            addToCartHandler={addToCartHandler}
            removeFromCartHandler={removeFromCartHandler}
            checkIfItemExistInCart={checkIfItemExistInCart}
        />
    )
}

export default ProductModule
