import { HTMLAttributes } from 'react'

export type ParagraphFamily = 'primary' | 'secondary'
export type ParagraphVariant = 'xl' | 'l' | 'm' | 's' | 'xs'
export type ParagraphWeight = 'light' | 'normal' | 'semibold' | 'bold'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    family?: ParagraphFamily
    weight?: ParagraphWeight
    variant?: ParagraphVariant
}
