/* eslint-disable no-unused-vars */

import { Product } from '@/models'

export interface Route {
    path: string
    label: string
}

export const Routes: Route[] = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/category/jewelery',
        label: 'Jewelery',
    },
    {
        path: "/category/men's clothing",
        label: "Men's Clothing",
    },
    {
        path: "/category/women's clothing",
        label: "Women's Clothing",
    },
]

export interface NavigationViewsProps {
    productList: Product[]
    isNavigationScrolled: boolean
    menuOnClickHandler: () => void
    isResponsiveNavigationOpen: boolean
    responsiveRouteHandler: (path: string) => void
}
