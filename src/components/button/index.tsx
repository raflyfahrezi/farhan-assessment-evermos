/* eslint-disable react/button-has-type */

import React from 'react'

import { ButtonProps } from './types'
import { sButton } from './styles'

const Button = ({ type, children, ...rest }: ButtonProps) => {
    return (
        <button type={type} className={sButton} {...rest}>
            {children}
        </button>
    )
}

export default Button
