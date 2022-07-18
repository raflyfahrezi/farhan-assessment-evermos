import { css } from '@emotion/css'

import { color } from '@/styles'

export const sCartCard = css`
    width: 100%;

    display: flex;
    gap: 20px;
    align-items: center;
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

    display: flex;
    gap: 10px;
    flex-direction: column;
`

export const sCartCardRemove = css`
    width: max-content;

    cursor: pointer;

    color: ${color.secondary.red};

    text-decoration: underline;
`
