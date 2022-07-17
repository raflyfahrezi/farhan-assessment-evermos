import { css } from '@emotion/css'

import { color } from '@/styles'

export const sNavigation = css`
    width: 100%;

    position: fixed;

    top: 0;
    left: 0;

    z-index: 10;

    transition: all 0.2s;
`

export const sNavigationScrolled = css`
    background-color: ${color.primary.lightBrown};

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const sNavigationWrapper = css`
    width: 100%;

    padding: 30px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const sNavigationLink = css`
    display: flex;
    gap: 20px;
    align-items: center;
`

export const sNavigationCart = css`
    position: relative;
`

export const sNavigationCartNumber = css`
    position: absolute;

    width: 18px;
    height: 18px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 10px;
    font-weight: bold;

    color: white;

    top: -6px;
    right: -6px;

    background-color: ${color.secondary.red};
`
