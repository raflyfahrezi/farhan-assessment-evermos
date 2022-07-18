import React from 'react'

import CartCardViews from './views'
import { CartCardProps } from './types'

const CartCard = ({
    title,
    image,
    price,
    removeFromCartHandler,
}: CartCardProps) => {
    return (
        <CartCardViews
            title={title}
            price={price}
            image={image}
            removeFromCartHandler={removeFromCartHandler}
        />
    )
}

export default CartCard
