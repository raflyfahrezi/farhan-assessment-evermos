import React from 'react'

import { ProductProps } from './types'
import ProductsModuleViews from './views'

const ProductsModule = ({ productList }: ProductProps) => {
    return <ProductsModuleViews productList={productList} />
}

export default ProductsModule
