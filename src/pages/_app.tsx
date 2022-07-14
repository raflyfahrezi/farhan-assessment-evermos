/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */

import React from 'react'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp
