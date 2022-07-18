import { css } from '@emotion/css'

import { font } from '@/styles'

export const sCart = css`
    width: 100%;

    display: flex;
    gap: 100px;
    flex-direction: column;

    padding: 50px 0;
`

export const sCartEmpty = css`
    width: 100%;

    text-align: center;
`

export const sCartHeader = css`
    width: 100%;
`

export const sCartHeading = css`
    font-size: ${font.size[64]};
`

export const sCartContentList = css`
    width: 100%;

    display: flex;
    gap: 30px;
    flex-direction: column;
`

export const sCartFooter = css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
