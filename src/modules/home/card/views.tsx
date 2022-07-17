/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Link } from '@/components'
import { Paragraph } from '@/typography'

import { CardViewsProps } from './types'
import { sCard, sCardImage, sCardLabel, sCardWrapper } from './styles'

const CardViews = ({ link, image, label }: CardViewsProps) => {
    return (
        <div className={sCardWrapper}>
            <Link href={link}>
                <div className={sCard}>
                    <div className={sCardLabel}>
                        <Paragraph variant='xl' weight='bold'>
                            {label}
                        </Paragraph>
                    </div>
                    <img src={image} className={sCardImage} alt={label} />
                </div>
            </Link>
        </div>
    )
}

export default CardViews
