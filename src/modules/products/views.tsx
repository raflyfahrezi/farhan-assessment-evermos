import React from 'react'

import { Paragraph } from '@/typography'
import { Wrapper, ProductCard } from '@/components'

import { ProductViewsProps } from './types'
import {
    sProducts,
    sProductsHeader,
    sProductsHeading,
    sProductContentList,
    sProductContentListItem,
} from './styles'

const ProductsModuleViews = ({ productList }: ProductViewsProps) => {
    return (
        <Wrapper>
            <div className={sProducts}>
                <div className={sProductsHeader}>
                    <Paragraph
                        weight='bold'
                        family='secondary'
                        className={sProductsHeading}
                    >
                        Our Products
                    </Paragraph>
                </div>
                <div className={sProductContentList}>
                    {productList.map((product) => (
                        <div
                            key={product.id}
                            className={sProductContentListItem}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductsModuleViews
