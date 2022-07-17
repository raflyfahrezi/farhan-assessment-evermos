import React, { useState } from 'react'

import { Product } from '@/models'

import { HomeProps } from './types'
import HomeModuleViews from './views'

const HomeModule = ({
    jeweleryList,
    mensClothingList,
    womensClothingList,
}: HomeProps) => {
    const [jewelery] = useState<Product>(jeweleryList[0])
    const [mensClothing] = useState<Product>(mensClothingList[1])
    const [womensClothing] = useState<Product>(womensClothingList[0])

    return (
        <HomeModuleViews
            jewelery={jewelery}
            mensClothing={mensClothing}
            womensClothing={womensClothing}
        />
    )
}

export default HomeModule
