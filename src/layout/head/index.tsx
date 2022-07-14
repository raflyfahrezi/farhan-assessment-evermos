import React from 'react'
import { NextSeo } from 'next-seo'

import { HeadProps } from './types'

const Head = ({ title, description }: HeadProps) => {
    return <NextSeo title={title} description={description} />
}

Head.defaultProps = {
    title: 'Hello World',
}

export default Head
