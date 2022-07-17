import { ReactNode } from 'react'

export interface LinkProps {
    href: string
    external?: boolean
    children: ReactNode
}
