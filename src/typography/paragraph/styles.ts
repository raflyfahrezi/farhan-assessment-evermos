import { css } from '@emotion/css'

import { font, color } from '@/styles'

export const sParagraph = css`
    color: ${color.darkBrown};

    font-weight: 400;
    font-size: ${font.size[16]};
`

export const sParagraphLight = css`
    font-weight: 300;
`

export const sParagraphSemiBold = css`
    font-weight: 600;
`

export const sParagraphBold = css`
    font-weight: 700;
`

export const sParagraphXS = css`
    font-size: ${font.size[12]};
`

export const sParagraphS = css`
    font-size: ${font.size[14]};
`

export const sParagraphL = css`
    font-size: ${font.size[18]};
`

export const sParagraphXL = css`
    font-size: ${font.size[24]};
`

export const sParagraphFamilyPrimary = css`
    font-family: ${font.familyPrimary};
`

export const sParagraphFamilySecondary = css`
    font-family: ${font.familySecondary};
`