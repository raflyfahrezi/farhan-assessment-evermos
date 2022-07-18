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

    @media (max-width: 700px) {
        display: none;
    }
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

export const sNavigationIcon = css`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const sNavigationResponsive = css`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 9;

    overflow: hidden;

    transition: all 0.5s;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
`

export const sNavigationResponsiveClose = css`
    height: 0;
`

export const sNavigationResponsiveContent = css`
    display: flex;
    gap: 20px;
    flex-direction: column;
`

export const sNavigationIconMenu = css`
    @media (min-width: 700px) {
        display: none;
    }
`
