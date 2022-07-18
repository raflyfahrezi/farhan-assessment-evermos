/* eslint-disable no-unused-vars */

import { FormEvent } from 'react'

export interface CartCardProps {
    id: number
    image: string
    title: string
    price: number
    removeFromCartHandler?: (event: FormEvent<HTMLParagraphElement>) => void
}

export interface CartCardViewsProps {
    image: string
    title: string
    price: number
    removeFromCartHandler?: (event: FormEvent<HTMLParagraphElement>) => void
}
