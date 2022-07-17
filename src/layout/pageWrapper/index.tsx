import React from 'react'
import { cx } from '@emotion/css'

import { Head } from '@/layout'

import Footer from '../footer'
import Navigation from '../navigation'
import { PageWrapperProps } from './types'
import {
    sPageWrapper,
    sPageWrapperContent,
    sPageWrapperContentWithPadding,
} from './styles'

const PageWrapper = ({ title, children, withPaddingTop }: PageWrapperProps) => {
    return (
        <>
            <Head title={title} />
            <div className={sPageWrapper}>
                <Navigation />
                <div
                    className={cx(sPageWrapperContent, {
                        [sPageWrapperContentWithPadding]: withPaddingTop,
                    })}
                >
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
