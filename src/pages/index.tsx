import React from 'react'
import type { NextPage } from 'next'

import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

import '@fontsource/lato/400.css'
import '@fontsource/lato/600.css'
import '@fontsource/lato/800.css'

import '@fontsource/frank-ruhl-libre/400.css'
import '@fontsource/frank-ruhl-libre/600.css'
import '@fontsource/frank-ruhl-libre/800.css'

const index: NextPage = () => {
    return (
        <PageWrapper title='fahsyon'>
            <HomeModule />
        </PageWrapper>
    )
}

export default index
