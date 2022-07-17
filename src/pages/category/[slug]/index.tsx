import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Product } from '@/models'
import { axiosGet } from '@/utils'
import { PageWrapper } from '@/layout'
import { CategoryModule } from '@/modules'

interface ContextProps extends ParsedUrlQuery {
    slug: string
}

interface CategoryProps {
    slug: string
    productList: Product[]
}

const category = ({ slug, productList }: CategoryProps) => {
    return (
        <PageWrapper
            title={`${slug?.toUpperCase()} Products - fahsyion`}
            withPaddingTop
        >
            <CategoryModule title={slug} productList={productList} />
        </PageWrapper>
    )
}

const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axiosGet('/products/categories', {})

    const paths = data.map((slug: any) => {
        return {
            params: { slug },
        }
    })

    return {
        paths,
        fallback: true,
    }
}

const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as ContextProps

    const productList = await axiosGet(`/products/category/${slug}`, {})

    return {
        props: {
            slug,
            productList: productList.data,
        },
        revalidate: 60,
    }
}

export default category
export { getStaticPaths, getStaticProps }
