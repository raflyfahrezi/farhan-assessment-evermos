import React from 'react'

import { Wrapper } from '@/components'
import { Paragraph } from '@/typography'

import { sFooter, sFooterContent } from './styles'

const FooterViews = () => {
    return (
        <footer className={sFooter}>
            <Wrapper>
                <div className={sFooterContent}>
                    <Paragraph>
                        Made by Farhan Rafly Fahrezi S for Evermos Case Study
                        Purpose
                    </Paragraph>
                </div>
            </Wrapper>
        </footer>
    )
}

export default FooterViews
