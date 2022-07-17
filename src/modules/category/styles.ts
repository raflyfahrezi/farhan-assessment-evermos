import { css } from '@emotion/css'

import { font } from '@/styles'

export const sCategory = css`
    width: 100%;

    display: flex;
    gap: 100px;
    flex-direction: column;

    padding: 50px 0;
`

export const sCategoryHeader = css`
    width: 100%;

    text-align: center;
`

export const sCategoryHeading = css`
    text-transform: capitalize;

    font-size: ${font.size[64]};
`

export const sCategoryContentList = css`
    width: 100%;

    display: grid;
    row-gap: 80px;
    column-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const sCategoryContentListItem = css`
    width: 100%;

    display: flex;
    justify-content: center;
`
