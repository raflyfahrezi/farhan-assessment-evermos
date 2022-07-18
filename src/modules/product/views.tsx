/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Paragraph } from '@/typography'
import { Button, Wrapper } from '@/components'
import { StarIcon, PackageIcon, MedalIcon, ShieldIcon } from '@/assets'

import { ProductModuleViewsProps } from './types'
import {
    sProduct,
    sProductImage,
    sProductTitle,
    sProductContent,
    sProductImageWrapper,
    sProductContentRating,
    sProductContentGuarantee,
    sProductContentGuaranteeIcon,
    sProductContentGuaranteeItem,
} from './styles'

const ProductModuleViews = ({
    product,
    addToCartHandler,
    removeFromCartHandler,
    checkIfItemExistInCart,
}: ProductModuleViewsProps) => {
    const { category, description, image, price, rating, title } = product

    return (
        <Wrapper>
            <div className={sProduct}>
                <div className={sProductImageWrapper}>
                    <img src={image} alt={title} className={sProductImage} />
                </div>
                <div className={sProductContent}>
                    <Paragraph
                        variant='xl'
                        family='secondary'
                        className={sProductTitle}
                    >
                        {title}
                    </Paragraph>
                    <div className={sProductContentRating}>
                        <StarIcon />
                        <Paragraph variant='xs'>
                            {rating.rate}/5 ({rating.count}) &nbsp; &middot;
                            &nbsp; {category}
                        </Paragraph>
                    </div>
                    <Paragraph>{description}.</Paragraph>
                    <Paragraph variant='xl' weight='bold'>
                        ${price}
                    </Paragraph>
                    {checkIfItemExistInCart() ? (
                        <Button
                            type='button'
                            variant='danger'
                            onClick={removeFromCartHandler}
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button type='button' onClick={addToCartHandler}>
                            Add to Cart
                        </Button>
                    )}
                    <div className={sProductContentGuarantee}>
                        <div className={sProductContentGuaranteeItem}>
                            <div className={sProductContentGuaranteeIcon}>
                                <PackageIcon />
                            </div>
                            <div>
                                <Paragraph weight='bold'>
                                    Free Delivery
                                </Paragraph>
                                <Paragraph>
                                    No cost needed for delivering this item.
                                </Paragraph>
                            </div>
                        </div>
                        <div className={sProductContentGuaranteeItem}>
                            <div className={sProductContentGuaranteeIcon}>
                                <MedalIcon />
                            </div>
                            <div>
                                <Paragraph weight='bold'>
                                    100% Original Guaranteed
                                </Paragraph>
                                <Paragraph>
                                    This item is guaranteed original.
                                </Paragraph>
                            </div>
                        </div>
                        <div className={sProductContentGuaranteeItem}>
                            <div className={sProductContentGuaranteeIcon}>
                                <ShieldIcon />
                            </div>
                            <div>
                                <Paragraph weight='bold'>
                                    Damage Protection
                                </Paragraph>
                                <Paragraph>
                                    Protection if the item damaged when
                                    delivering.
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductModuleViews
