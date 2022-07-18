/* eslint-disable react/button-has-type */

import React from 'react'

import ButtonViews from './views'
import { ButtonProps } from './types'

const Button = ({ type, variant, children, ...rest }: ButtonProps) => {
    return (
        <ButtonViews type={type} variant={variant} {...rest}>
            {children}
        </ButtonViews>
    )
}

export default Button
