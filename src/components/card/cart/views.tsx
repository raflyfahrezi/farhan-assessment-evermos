/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Paragraph } from '@/typography'

import { CartCardViewsProps } from './types'
import {
    sCartCard,
    sCartCardImage,
    sCartCardRemove,
    sCartCardContent,
} from './styles'

const CartCardViews = ({
    title,
    image,
    price,
    removeFromCartHandler,
}: CartCardViewsProps) => {
    return (
        <div className={sCartCard}>
            <div className={sCartCardImage}>
                <img src={image} alt={title} />
            </div>
            <div className={sCartCardContent}>
                <Paragraph weight='bold' variant='xl' family='secondary'>
                    {title}
                </Paragraph>
                <Paragraph variant='xl'>${price}</Paragraph>
                <Paragraph
                    className={sCartCardRemove}
                    onClick={removeFromCartHandler}
                >
                    Remove from cart
                </Paragraph>
            </div>
        </div>
    )
}

export default CartCardViews
