import React from 'react'

import { Head } from '@/layout'

import { PageWrapperProps } from './types'
import { sPageWrapper } from './styles'

const PageWrapper = ({ title, children }: PageWrapperProps) => {
    return (
        <>
            <Head title={title} />
            <div className={sPageWrapper}>{children}</div>
        </>
    )
}

export default PageWrapper
