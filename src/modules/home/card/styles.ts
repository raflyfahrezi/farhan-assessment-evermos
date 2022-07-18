import { css } from '@emotion/css'

import { color } from '@/styles'

export const sCard = css`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;

    padding: 20px 0;

    border-radius: 6px;

    overflow: hidden;

    position: relative;

    transition: 0.2s;

    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        max-width: 100%;
    }
`

export const sCardWrapper = css`
    width: 100%;
`

export const sCardImage = css`
    width: 100%;
    height: 250px;

    object-fit: contain;
`

export const sCardLabel = css`
    width: 100%;
    height: 100%;

    padding: 20px;

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.6);

    & p {
        color: ${color.primary.lightBrown};
    }
`
