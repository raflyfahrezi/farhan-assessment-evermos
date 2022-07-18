import { css } from '@emotion/css'

export const sProductCard = css`
    width: 100%;
    max-width: 180px;

    border-radius: 6px;

    overflow: hidden;

    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 470px) {
        max-width: none;
    }
`

export const sProductCardContent = css`
    width: 100%;

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

export const sProductCardRating = css`
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
`

export const sProductCardInfo = css`
    width: 100%;

    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: flex-end;

    text-align: center;
`

export const sProductCardFooter = css`
    width: 100%;

    display: flex;
    gap: 20px;
    flex-direction: column;

    text-align: center;
`
