/* eslint-disable react/no-danger */

import * as React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

import { emotionStatic } from '@/utils'

export default class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const page = await ctx.renderPage()
        const { css, ids } = await emotionStatic(page.html)
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        data-emotion={`css ${ids.join(' ')}`}
                        dangerouslySetInnerHTML={{ __html: css }}
                    />
                </>
            ),
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
