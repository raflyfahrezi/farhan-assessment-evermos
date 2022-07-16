import React from 'react'

import { sWrapper } from './styles'
import { WrapperViewsProps } from './types'

const wrapperViews = ({ children }: WrapperViewsProps) => {
    return <div className={sWrapper}>{children}</div>
}

export default wrapperViews
