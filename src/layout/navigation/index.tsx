import React, { useEffect } from 'react'

import { zustand } from '@/services'

import NavigationViews from './views'

const Navigation = () => {
    const state = {
        cart: zustand((zustandState) => zustandState.cart),
        isNavigationScrolled: zustand(
            (zustandState) => zustandState.isNavigationScrolled
        ),
        setIsNavigationScrolled: zustand(
            (zustandState) => zustandState.setIsNavigationScrolled
        ),
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
            isNavigationScrolled={state.isNavigationScrolled}
        />
    )
}

export default Navigation
