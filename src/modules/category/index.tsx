import React from 'react'
import { useRouter } from 'next/router'

import CategoryModuleViews from './views'
import { CategoryModuleProps } from './types'

const CategoryModule = ({ title, productList }: CategoryModuleProps) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <CategoryModuleViews title={title} productList={productList} />
}

export default CategoryModule
