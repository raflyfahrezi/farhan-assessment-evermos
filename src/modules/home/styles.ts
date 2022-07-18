import { css } from '@emotion/css'

import { font } from '@/styles'

export const sHome = css`
    padding: 100px 0;

    display: flex;
    gap: 100px;
    flex-direction: column;
`

export const sHomeHeader = css`
    width: 100%;

    display: flex;
    gap: 30px;
    flex-direction: column;

    text-align: center;
`

export const sHomeHeading = css`
    font-size: ${font.size[64]};

    line-height: ${font.size[64]};
`

export const sHomeCategories = css`
    display: flex;
    gap: 30px;
    justify-content: space-around;

    @media (max-width: 800px) {
        align-items: center;
        flex-direction: column;
    }
`
