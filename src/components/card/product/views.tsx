/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { StarIcon } from '@/assets'
import { Paragraph } from '@/typography'
import { Link, Button } from '@/components'

import { ProductCardViewsProps } from './types'
import {
    sProductCard,
    sProductCardInfo,
    sProductCardImage,
    sProductCardRating,
    sProductCardFooter,
    sProductCardContent,
} from './styles'

const ProductCardViews = ({ product }: ProductCardViewsProps) => {
    const { id, title, image, price, rating } = product

    return (
        <div className={sProductCard}>
            <div className={sProductCardContent}>
                <div className={sProductCardImage}>
                    <img src={image} alt={title} />
                </div>
                <div className={sProductCardInfo}>
                    <div className={sProductCardRating}>
                        <StarIcon />
                        <Paragraph variant='xs'>{rating.rate}</Paragraph>
                    </div>
                    <Paragraph family='secondary'>{title}</Paragraph>
                </div>
            </div>
            <div className={sProductCardFooter}>
                <Paragraph weight='bold'>${price}</Paragraph>
                <Link href={`/product/${id}`}>
                    <Button type='button'>Details</Button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCardViews
