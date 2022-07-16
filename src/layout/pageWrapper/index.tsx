import React from 'react'

import { Head } from '@/layout'

import Navigation from '../navigation'
import { sPageWrapper } from './styles'
import { PageWrapperProps } from './types'

const PageWrapper = ({ title, children }: PageWrapperProps) => {
    return (
        <>
            <Head title={title} />
            <div className={sPageWrapper}>
                <Navigation />
                <div>{children}</div>
            </div>
        </>
    )
}

export default PageWrapper
