import React from 'react'
import { cx } from '@emotion/css'

import { sParagraph } from './styles'
import { ParagraphProps } from './types'
import {
    getVariantStyle,
    getParagraphWeight,
    getParagraphFamily,
} from './helpers'

const Paragraph = ({
    weight,
    family,
    variant,
    children,
    className,
    ...props
}: ParagraphProps) => {
    return (
        <p
            className={cx(
                sParagraph,
                getVariantStyle(variant),
                getParagraphWeight(weight),
                getParagraphFamily(family),
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export default Paragraph
