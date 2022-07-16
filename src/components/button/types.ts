import { ReactNode, HTMLAttributes } from 'react'

export type ButtonType = 'submit' | 'reset' | 'button'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    type: ButtonType
    children: ReactNode
}
