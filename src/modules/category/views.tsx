import React from 'react'

import { Paragraph } from '@/typography'
import { Wrapper, ProductCard } from '@/components'

import {
    sCategory,
    sCategoryHeader,
    sCategoryHeading,
    sCategoryContentList,
    sCategoryContentListItem,
} from './styles'
import { CategoryModuleViewsProps } from './types'

const CategoryModuleViews = ({
    title,
    productList,
}: CategoryModuleViewsProps) => {
    return (
        <Wrapper>
            <div className={sCategory}>
                <div className={sCategoryHeader}>
                    <Paragraph
                        weight='bold'
                        family='secondary'
                        className={sCategoryHeading}
                    >
                        {title} Products
                    </Paragraph>
                </div>
                <div className={sCategoryContentList}>
                    {productList.map((product) => (
                        <div
                            key={product.id}
                            className={sCategoryContentListItem}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default CategoryModuleViews
