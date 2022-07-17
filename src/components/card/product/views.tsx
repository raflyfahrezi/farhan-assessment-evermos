/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Paragraph } from '@/typography'

import { ProductCardViewsProps } from './types'
import { sProductCard, sProductCardImage } from './styles'

const ProductCardViews = ({ product }: ProductCardViewsProps) => {
    const { title, image, price, rating } = product

    return (
        <div className={sProductCard}>
            <div className={sProductCardImage}>
                <img src={image} alt={title} />
            </div>
            <div>
                <Paragraph>{rating.rate}</Paragraph>
                <Paragraph>{title}</Paragraph>
                <Paragraph>{price}</Paragraph>
            </div>
        </div>
    )
}

export default ProductCardViews
