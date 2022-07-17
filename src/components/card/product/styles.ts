import { css } from '@emotion/css'

export const sProductCard = css`
    width: 100%;
    max-width: 180px;

    border-radius: 6px;

    overflow: hidden;

    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const sProductCardImage = css`
    width: 100%;
    height: 200px;

    & img {
        width: 100%;
        height: 100%;

        object-fit: contain;
    }
`
