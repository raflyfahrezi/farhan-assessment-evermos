import React from 'react'

import { CartIcon } from '@/assets'
import { Wrapper } from '@/components'
import { Paragraph } from '@/typography'

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
                        <Paragraph>fahsyon</Paragraph>
                    </div>
                    <div className={sNavigationLink}>
                        <Paragraph weight='bold'>Home</Paragraph>
                        <Paragraph weight='bold'>Products</Paragraph>
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
