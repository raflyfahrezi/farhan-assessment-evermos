import React from 'react'
import { Global, css } from '@emotion/react'

import { font } from '../theme'

const globalCSS = css`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: ${font.familyPrimary};
    }
`

const GlobalCSS = () => {
    return <Global styles={globalCSS} />
}

export default GlobalCSS
