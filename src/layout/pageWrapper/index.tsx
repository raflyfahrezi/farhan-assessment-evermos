import React from 'react'
import { cx } from '@emotion/css'

import { Head } from '@/layout'

import Footer from '../footer'
import Navigation from '../navigation'
import { PageWrapperProps } from './types'
import {
    sPageWrapper,
    sPageWrapperWrapper,
    sPageWrapperContent,
    sPageWrapperContentWithPadding,
} from './styles'

const PageWrapper = ({ title, children, withPaddingTop }: PageWrapperProps) => {
    return (
        <>
            <Head title={title} />
            <div className={sPageWrapper}>
                <div className={sPageWrapperWrapper}>
                    <Navigation />
                    <div
                        className={cx(sPageWrapperContent, {
                            [sPageWrapperContentWithPadding]: withPaddingTop,
                        })}
                    >
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
