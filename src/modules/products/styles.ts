import { css } from '@emotion/css'

import { font } from '@/styles'

export const sProducts = css`
    width: 100%;

    display: flex;
    gap: 100px;
    flex-direction: column;

    padding: 50px 0;
`

export const sProductsHeader = css`
    width: 100%;

    text-align: center;
`

export const sProductsHeading = css`
    font-size: ${font.size[64]};
`

export const sProductContentList = css`
    width: 100%;

    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const sProductContentListItem = css`
    width: 100%;

    display: flex;
    justify-content: center;
`
