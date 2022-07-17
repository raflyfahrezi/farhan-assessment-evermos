import React from 'react'
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

import { axiosGet } from '@/utils'
import { Product } from '@/models'
import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

export interface IndexProps {
    jeweleryList: Product[]
    mensClothingList: Product[]
    womensClothingList: Product[]
}

const index = ({
    jeweleryList,
    mensClothingList,
    womensClothingList,
}: InferGetStaticPropsType<IndexProps>) => {
    return (
        <PageWrapper title='fahsyon'>
            <HomeModule
                jeweleryList={jeweleryList}
                mensClothingList={mensClothingList}
                womensClothingList={womensClothingList}
            />
        </PageWrapper>
    )
}

const getStaticProps = async (): Promise<GetStaticPropsResult<IndexProps>> => {
    const mensClothingList = await axiosGet(
        "/products/category/men's%20clothing",
        {}
    )

    const womensClothingList = await axiosGet(
        "/products/category/women's%20clothing",
        {}
    )

    const jeweleryClothingList = await axiosGet(
        '/products/category/jewelery',
        {}
    )

    return {
        props: {
            jeweleryList: jeweleryClothingList.data,
            mensClothingList: mensClothingList.data,
            womensClothingList: womensClothingList.data,
        },

        // Incremental Static Rendering (ISR)
        revalidate: 60,
    }
}

export default index
export { getStaticProps }
