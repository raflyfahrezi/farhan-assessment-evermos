import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Product } from '@/models'
import { axiosGet } from '@/utils'
import { PageWrapper } from '@/layout'
import { ProductModule } from '@/modules'

interface ContextProps extends ParsedUrlQuery {
    id: string
}

interface ProductProps {
    title: string
    productItem: Product
}

const product = ({ title, productItem }: ProductProps) => {
    return (
        <PageWrapper title={`${title} Product - fahsyion`} withPaddingTop>
            <ProductModule product={productItem} />
        </PageWrapper>
    )
}

const getStaticPaths: GetStaticPaths = async () => {
    const jeweleryData = await axiosGet('/products/category/jewelery', {})
    const mensData = await axiosGet("/products/category/men's clothing", {})
    const womensData = await axiosGet("/products/category/women's clothing", {})

    const allData = [...jeweleryData.data, ...mensData.data, ...womensData.data]

    const paths = allData.map((item: any) => {
        return {
            params: {
                id: `${item?.id}`,
            },
        }
    })

    return {
        paths,
        fallback: true,
    }
}

const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as ContextProps

    const productList = await axiosGet(`/products/${id}`, {})

    return {
        props: {
            productItem: productList.data,
            title: productList.data?.title,
        },
        revalidate: 60,
    }
}

export default product
export { getStaticPaths, getStaticProps }
