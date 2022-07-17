/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import NextLink from 'next/link'

import { sLink } from './styles'
import { LinkProps } from './types'

const LinkViews = ({ href, children }: LinkProps) => {
    return (
        <NextLink href={href} passHref>
            <a className={sLink}>{children}</a>
        </NextLink>
    )
}

const LinkExternalViews = ({ href, children }: LinkProps) => {
    return (
        <a
            href={href}
            target='_blank'
            className={sLink}
            rel='noreferrer noopener'
        >
            {children}
        </a>
    )
}

export { LinkViews, LinkExternalViews }
