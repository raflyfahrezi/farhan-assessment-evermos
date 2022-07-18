import { css } from '@emotion/css'

export const sCartCard = css`
    width: 100%;

    display: flex;
    gap: 20px;
`

export const sCartCardImage = css`
    width: 100%;
    height: 100px;
    max-width: 100px;

    & img {
        width: 100%;
        height: 100%;

        object-fit: contain;
    }
`

export const sCartCardContent = css`
    width: 100%;
`
