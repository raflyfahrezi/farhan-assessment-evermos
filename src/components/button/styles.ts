import { css } from '@emotion/css'

import { color } from '@/styles'

export const sButton = css`
    width: auto;
    min-width: 160px;

    padding: 14px;

    text-align: center;
    font-weight: bold;
    text-transform: uppercase;

    border: none;
    border-radius: 4px;

    color: white;

    cursor: pointer;

    transition: 0.5s;

    &:active {
        transform: scale(0.95);
    }
`

export const sButtonPrimary = css`
    background-color: ${color.primary.darkBrown};
`

export const sButtonDanger = css`
    background-color: ${color.secondary.red};
`
