import { css } from '@emotion/css'

import { font, color } from '@/styles'

export const sHero = css`
    width: 100%;

    position: relative;

    z-index: 0;

    overflow: hidden;

    padding: 140px 0 100px 0;

    background-color: ${color.primary.lightBrown};

    &::after {
        content: url('/icons/heroBackground.svg');

        position: absolute;

        right: 0;
        bottom: -120px;

        z-index: -1;
    }
`

export const sHeroText = css`
    width: 100%;

    display: flex;
    gap: 30px;
    flex-direction: column;
`

export const sHeroHeading = css`
    font-size: ${font.size[64]};

    line-height: ${font.height[48]};
`

export const sHeroContent = css`
    width: 100%;

    display: flex;
    gap: 100px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const sHeroImageWrapper = css`
    width: 100%;

    position: relative;

    display: flex;
    justify-content: center;

    &::before {
        content: url('/icons/heroDots.svg');

        position: absolute;

        bottom: 30px;
        left: 0;
    }

    &::after {
        content: url('/icons/heroDots.svg');

        position: absolute;

        right: 0;
        top: 30px;
    }
`

export const sHeroImage = css`
    width: 100%;
    max-width: 300px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 100px;
`
