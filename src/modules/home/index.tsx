import React from 'react'

import { Wrapper } from '@/components'

import Hero from './hero'

const HomeModule = () => {
    return (
        <div>
            <Hero />
            <Wrapper>
                <div>
                    <p>This is home module</p>
                </div>
            </Wrapper>
        </div>
    )
}

export default HomeModule
