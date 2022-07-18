/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react'
import { cx } from '@emotion/css'

import { Paragraph } from '@/typography'
import { Link, Wrapper } from '@/components'
import { CartIcon, MenuIcon } from '@/assets'

import { Routes, NavigationViewsProps } from './types'
import {
    sNavigation,
    sNavigationLink,
    sNavigationCart,
    sNavigationIcon,
    sNavigationWrapper,
    sNavigationScrolled,
    sNavigationIconMenu,
    sNavigationCartNumber,
    sNavigationResponsive,
    sNavigationResponsiveClose,
    sNavigationResponsiveContent,
} from './styles'

const NavigationViews = ({
    productList,
    menuOnClickHandler,
    isNavigationScrolled,
    responsiveRouteHandler,
    isResponsiveNavigationOpen,
}: NavigationViewsProps) => {
    return (
        <>
            <nav
                className={cx(sNavigation, {
                    [sNavigationScrolled]: isNavigationScrolled,
                })}
            >
                <Wrapper>
                    <div className={sNavigationWrapper}>
                        <div>
                            <Paragraph variant='xl' family='secondary'>
                                fahsyon
                            </Paragraph>
                        </div>
                        <div className={sNavigationLink}>
                            {Routes.map((route) => {
                                return (
                                    <Link key={route.path} href={route.path}>
                                        <Paragraph weight='bold'>
                                            {route.label}
                                        </Paragraph>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className={sNavigationIcon}>
                            <Link href='/cart'>
                                <div className={sNavigationCart}>
                                    <p className={sNavigationCartNumber}>
                                        {productList.length}
                                    </p>
                                    <CartIcon />
                                </div>
                            </Link>
                            <div
                                className={sNavigationIconMenu}
                                onClick={() => menuOnClickHandler()}
                            >
                                <MenuIcon />
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </nav>
            <div
                className={cx(sNavigationResponsive, {
                    [sNavigationResponsiveClose]: !isResponsiveNavigationOpen,
                })}
            >
                <div className={sNavigationResponsiveContent}>
                    {Routes.map((route) => {
                        return (
                            <Paragraph
                                weight='bold'
                                key={route.path}
                                onClick={() =>
                                    responsiveRouteHandler(route.path)
                                }
                            >
                                {route.label}
                            </Paragraph>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NavigationViews
