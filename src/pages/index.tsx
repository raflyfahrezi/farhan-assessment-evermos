import React from 'react'
import type { NextPage } from 'next'

import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

const index: NextPage = () => {
    return (
        <PageWrapper title='Home'>
            <HomeModule />
        </PageWrapper>
    )
}

export default index
