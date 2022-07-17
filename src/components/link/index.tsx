/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import { LinkViews, LinkExternalViews } from './views'
import { LinkProps } from './types'

const Link = ({ href, children, external }: LinkProps) => {
    if (external) {
        return <LinkExternalViews href={href}>{children}</LinkExternalViews>
    }

    return <LinkViews href={href}>{children}</LinkViews>
}

export default Link
