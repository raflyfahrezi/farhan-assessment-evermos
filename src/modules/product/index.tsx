import React from 'react'
import { useRouter } from 'next/router'

import ProductViewsModule from './views'
import { ProductModuleProps } from './types'

const ProductModule = ({ product }: ProductModuleProps) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <ProductViewsModule product={product} />
}

export default ProductModule
