import { css } from '@emotion/css'

import { color } from '@/styles'

export const sFooter = css`
    width: 100%;

    padding: 40px 0;

    background-color: ${color.primary.brown};
`

export const sFooterContent = css`
    width: 100%;

    text-align: center;

    & p {
        color: ${color.ternary.white};
    }
`
