/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import { zustand } from '@/services'

import NavigationViews from './views'

const Navigation = () => {
    const router = useRouter()

    const [isResponsiveNavigationOpen, setIsResponsiveNavigationOpen] =
        useState<boolean>(false)

    const state = {
        cart: zustand((zustandState) => zustandState.cart),
        isNavigationScrolled: zustand(
            (zustandState) => zustandState.isNavigationScrolled
        ),
        setIsNavigationScrolled: zustand(
            (zustandState) => zustandState.setIsNavigationScrolled
        ),
    }

    const menuOnClickHandler = () => {
        setIsResponsiveNavigationOpen(!isResponsiveNavigationOpen)
    }

    const responsiveRouteHandler = (path: string) => {
        setIsResponsiveNavigationOpen(false)

        router.push(path)
    }

    useEffect(() => {
        const { setIsNavigationScrolled } = state

        window.addEventListener('scroll', () => {
            if (window.scrollY >= 10) {
                setIsNavigationScrolled(true)

                return
            }

            setIsNavigationScrolled(false)
        })
    }, [])

    return (
        <NavigationViews
            productList={state.cart}
            menuOnClickHandler={menuOnClickHandler}
            responsiveRouteHandler={responsiveRouteHandler}
            isNavigationScrolled={state.isNavigationScrolled}
            isResponsiveNavigationOpen={isResponsiveNavigationOpen}
        />
    )
}

export default Navigation
