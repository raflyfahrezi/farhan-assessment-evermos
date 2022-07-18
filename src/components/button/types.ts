import { ReactNode, HTMLAttributes } from 'react'

export type ButtonType = 'submit' | 'reset' | 'button'
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: ButtonType
    children: ReactNode
    variant?: ButtonVariant
}

export interface ButtonViewsProps extends HTMLAttributes<HTMLButtonElement> {
    type: ButtonType
    children: ReactNode
    variant?: ButtonVariant
}
