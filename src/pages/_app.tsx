/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */

import React from 'react'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import { Global } from '@/styles'

import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'

import '@fontsource/frank-ruhl-libre/400.css'
import '@fontsource/frank-ruhl-libre/700.css'
import '@fontsource/frank-ruhl-libre/900.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Global />
            <Component {...pageProps} />
            <NextNProgress
                height={5}
                color='#34251F'
                stopDelayMs={200}
                options={{ showSpinner: false, easing: 'ease', speed: 500 }}
            />
        </>
    )
}

export default MyApp
