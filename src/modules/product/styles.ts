import { css } from '@emotion/css'

import { font } from '@/styles'

export const sProduct = css`
    width: 100%;

    display: flex;
    gap: 60px;

    padding: 50px 0;
`

export const sProductTitle = css`
    font-size: ${font.size[48]};
`

export const sProductImageWrapper = css`
    width: 100%;
    max-width: 200px;
`

export const sProductImage = css`
    width: 100%;
`

export const sProductContent = css`
    width: 100%;

    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const sProductContentRating = css`
    width: 100%;

    display: flex;
    gap: 10px;
    align-items: center;

    text-transform: capitalize;
`

export const sProductContentGuarantee = css`
    width: 100%;

    padding-top: 30px;

    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const sProductContentGuaranteeItem = css`
    width: 100%;

    display: flex;
    gap: 14px;
`

export const sProductContentGuaranteeIcon = css`
    width: 100%;
    max-width: 40px;
`
