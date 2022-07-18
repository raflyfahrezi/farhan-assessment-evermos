/* eslint-disable react/button-has-type */

import React from 'react'
import { cx } from '@emotion/css'

import { sButton } from './styles'
import { getButtonVariant } from './helpers'
import { ButtonViewsProps } from './types'

const ButtonViews = ({
    type,
    variant,
    children,
    ...rest
}: ButtonViewsProps) => {
    return (
        <button
            type={type}
            className={cx(sButton, getButtonVariant(variant ?? 'primary'))}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ButtonViews
