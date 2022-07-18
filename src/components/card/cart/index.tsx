import React from 'react'

import CartCardViews from './views'
import { CartCardProps } from './types'

const CartCard = ({ title, image, price }: CartCardProps) => {
    return <CartCardViews title={title} price={price} image={image} />
}

export default CartCard
