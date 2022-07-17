import React, { useState } from 'react'

import { Product } from '@/models'
import { Wrapper } from '@/components'
import { Paragraph } from '@/typography'

import Card from './card'
import Hero from './hero'
import { HomeProps } from './types'
import { sHome, sHomeHeading, sHomeHeader, sHomeCategories } from './styles'

const HomeModule = ({
    jeweleryList,
    mensClothingList,
    womensClothingList,
}: HomeProps) => {
    const [jewelery] = useState<Product>(jeweleryList[0])
    const [mensClothing] = useState<Product>(mensClothingList[1])
    const [womensClothing] = useState<Product>(womensClothingList[0])

    return (
        <div>
            <Hero />
            <Wrapper>
                <div className={sHome}>
                    <div className={sHomeHeader}>
                        <Paragraph
                            weight='bold'
                            family='secondary'
                            className={sHomeHeading}
                        >
                            New Collections
                        </Paragraph>
                        <Paragraph variant='l'>
                            See what&apos;s new from our products
                        </Paragraph>
                    </div>
                    <div className={sHomeCategories}>
                        <Card
                            link='/'
                            image={jewelery.image}
                            label='Jewelery'
                        />
                        <Card
                            link='/'
                            image={mensClothing.image}
                            label="Men's Clothing"
                        />
                        <Card
                            link='/'
                            image={womensClothing.image}
                            label="Women's Clothing"
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default HomeModule
