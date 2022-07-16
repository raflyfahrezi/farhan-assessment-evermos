/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Button, Wrapper } from '@/components'
import { Paragraph } from '@/typography'

import {
    sHero,
    sHeroText,
    sHeroImage,
    sHeroContent,
    sHeroHeading,
    sHeroImageWrapper,
} from './styles'

const Hero = () => {
    return (
        <div className={sHero}>
            <Wrapper>
                <div className={sHeroContent}>
                    <div className={sHeroText}>
                        <Paragraph
                            weight='bold'
                            family='secondary'
                            className={sHeroHeading}
                        >
                            Find the Best Fashion Style for You
                        </Paragraph>
                        <Paragraph variant='l'>
                            Get the style that suits you for today. fahsyon
                            provides various styles that you can use for your
                            daily life.
                        </Paragraph>
                        <div>
                            <Button type='button'>Check products</Button>
                        </div>
                    </div>
                    <div className={sHeroImageWrapper}>
                        <img
                            src='/images/heroWomen.jpg'
                            className={sHeroImage}
                            alt='Hero Women'
                        />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Hero
