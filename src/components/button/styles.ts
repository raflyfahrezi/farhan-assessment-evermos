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

    background-color: ${color.primary.darkBrown};

    &:active {
        transform: scale(0.95);
    }
`
