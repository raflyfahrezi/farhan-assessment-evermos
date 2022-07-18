import React from 'react'

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

const CartModuleViews = ({
    cart,
    getTotalCartPrice,
    removeFromCartHandler,
}: CartModuleViewsProps) => {
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
                {cart.length > 0 ? (
                    <div className={sCartContentList}>
                        {cart.map((item) => {
                            return (
                                <CartCard
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    removeFromCartHandler={() =>
                                        removeFromCartHandler(item.id)
                                    }
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
                            Total: ${getTotalCartPrice(cart)}
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
