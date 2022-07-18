/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Paragraph } from '@/typography'

import { CartCardViewsProps } from './types'
import { sCartCard, sCartCardImage } from './styles'

const CartCardViews = ({ title, image, price }: CartCardViewsProps) => {
    return (
        <div className={sCartCard}>
            <div className={sCartCardImage}>
                <img src={image} alt={title} />
            </div>
            <div>
                <Paragraph weight='bold' variant='xl' family='secondary'>
                    {title}
                </Paragraph>
                <Paragraph>${price}</Paragraph>
            </div>
        </div>
    )
}

export default CartCardViews
