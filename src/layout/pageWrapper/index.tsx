import React from 'react'

import { Head } from '@/layout'

import { PageWrapperProps } from './types'

const PageWrapper = ({ title, children }: PageWrapperProps) => {
    return (
        <div>
            <Head title={title} />
            <div>{children}</div>
        </div>
    )
}

export default PageWrapper
