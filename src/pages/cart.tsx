import React from 'react'

import { CartModule } from '@/modules'
import { PageWrapper } from '@/layout'

const cart = () => {
    return (
        <PageWrapper title='Cart - fashyon' withPaddingTop>
            <CartModule />
        </PageWrapper>
    )
}

export default cart
