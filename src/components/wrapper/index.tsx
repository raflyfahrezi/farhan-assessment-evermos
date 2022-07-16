import React from 'react'

import WrapperViews from './views'
import { WrapperProps } from './types'

const wrapper = ({ children }: WrapperProps) => {
    return <WrapperViews>{children}</WrapperViews>
}

export default wrapper
