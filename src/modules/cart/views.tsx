import React from 'react'

import { zustand } from '@/services'
import { Paragraph } from '@/typography'
import { Wrapper, CartCard, Button } from '@/components'

import { CartModuleViewsProps } from './types'
import {
    sCart,
    sCartEmpty,
    sCartHeader,
    sCartFooter,
    sCartHeading,
    sCartContentList,
} from './styles'

const CartModuleViews = ({ getTotalCartPrice }: CartModuleViewsProps) => {
    const state = {
        cart: zustand((zustandState) => zustandState.cart),
    }

    return (
        <Wrapper>
            <div className={sCart}>
                <div className={sCartHeader}>
                    <Paragraph
                        className={sCartHeading}
                        weight='bold'
                        family='secondary'
                    >
                        Cart
                    </Paragraph>
                </div>
                {state.cart.length > 0 ? (
                    <div className={sCartContentList}>
                        {state.cart.map((item) => {
                            return (
                                <CartCard
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                />
                            )
                        })}
                    </div>
                ) : (
                    <div className={sCartEmpty}>
                        <Paragraph variant='l'>Cart is empty</Paragraph>
                    </div>
                )}
                <div className={sCartFooter}>
                    <div>
                        <Paragraph weight='bold' variant='xl'>
                            Total: ${getTotalCartPrice(state.cart)}
                        </Paragraph>
                    </div>
                    <div>
                        <Button type='button'>Checkout</Button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default CartModuleViews
