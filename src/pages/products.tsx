import React from 'react'
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import { axiosGet } from '@/utils'
import { Product } from '@/models'
import { PageWrapper } from '@/layout'
import { ProductsModule } from '@/modules'

export interface ProductsProps {
    productList: Product[]
}

const products = ({ productList }: InferGetStaticPropsType<ProductsProps>) => {
    return (
        <PageWrapper title='Products - fahsyon' withPaddingTop>
            <ProductsModule productList={productList} />
        </PageWrapper>
    )
}

const getStaticProps = async (): Promise<
    GetStaticPropsResult<ProductsProps>
> => {
    const productList = await axiosGet('/products', {})

    return {
        props: {
            productList: productList.data,
        },

        // Incremental Static Rendering (ISR)
        revalidate: 60,
    }
}

export default products
export { getStaticProps }
