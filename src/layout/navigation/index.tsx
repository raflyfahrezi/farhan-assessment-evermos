import React from 'react'

import { CartIcon } from '@/assets'
import { Paragraph } from '@/typography'
import { Link, Wrapper } from '@/components'

import {
    sNavigation,
    sNavigationLink,
    sNavigationCart,
    sNavigationWrapper,
    sNavigationCartNumber,
} from './styles'

const Navigation = () => {
    return (
        <nav className={sNavigation}>
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
                        <Link href='/products'>
                            <Paragraph weight='bold'>Products</Paragraph>
                        </Link>
                    </div>
                    <div>
                        <div className={sNavigationCart}>
                            <p className={sNavigationCartNumber}>0</p>
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </nav>
    )
}

export default Navigation
