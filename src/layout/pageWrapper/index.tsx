import React from 'react'
import { cx } from '@emotion/css'
import { motion } from 'framer-motion'

import { Head } from '@/layout'

import Footer from '../footer'
import Navigation from '../navigation'
import { PageWrapperProps } from './types'
import { aPageWrapperContent } from './animation'
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
                    <motion.div
                        exit='exit'
                        initial='initial'
                        animate='animate'
                        variants={aPageWrapperContent}
                        className={cx(sPageWrapperContent, {
                            [sPageWrapperContentWithPadding]: withPaddingTop,
                        })}
                    >
                        {children}
                    </motion.div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper
