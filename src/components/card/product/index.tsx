import React from 'react'

import ProductCardViews from './views'
import { ProductCardProps } from './types'

const ProductCard = ({ product }: ProductCardProps) => {
    return <ProductCardViews product={product} />
}

export default ProductCard
