import React from 'react'
import { cx } from '@emotion/css'

import { CartIcon } from '@/assets'
import { Paragraph } from '@/typography'
import { Link, Wrapper } from '@/components'

import {
    sNavigation,
    sNavigationLink,
    sNavigationCart,
    sNavigationWrapper,
    sNavigationScrolled,
    sNavigationCartNumber,
} from './styles'
import { NavigationViewsProps } from './types'

const NavigationViews = ({
    productList,
    isNavigationScrolled,
}: NavigationViewsProps) => {
    return (
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
                        <Link href='/'>
                            <Paragraph weight='bold'>Home</Paragraph>
                        </Link>
                        <Link href='/category/jewelery'>
                            <Paragraph weight='bold'>Jewelery</Paragraph>
                        </Link>
                        <Link href="/category/men's clothing">
                            <Paragraph weight='bold'>
                                Men&apos;s Clothing
                            </Paragraph>
                        </Link>
                        <Link href="/category/women's clothing">
                            <Paragraph weight='bold'>
                                Women&apos;s Clothing
                            </Paragraph>
                        </Link>
                    </div>
                    <div>
                        <Link href='/cart'>
                            <div className={sNavigationCart}>
                                <p className={sNavigationCartNumber}>
                                    {productList.length}
                                </p>
                                <CartIcon />
                            </div>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </nav>
    )
}

export default NavigationViews
