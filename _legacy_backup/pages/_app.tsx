import {AppProps} from 'next/app'
import {ChakraProvider, extendTheme, StyleFunctionProps} from '@chakra-ui/react'

import {Montserrat} from "next/font/google";
import {GoogleAnalytics} from "nextjs-google-analytics";
import {appWithTranslation} from 'next-i18next'
import {SessionProvider} from "next-auth/react"

import React from 'react';

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({subsets: ['latin']});

const appCore = ({Component, pageProps}: AppProps) => (
    <React.Fragment>
        <ChakraProvider theme={extendTheme({
            fonts: {
                heading: montserrat.style.fontFamily,
                body: montserrat.style.fontFamily,
            },
            styles: {
                global: (props: StyleFunctionProps) => ({
                    body: {
                        fontFamily: 'body',
                        color: '#292929',
                    },
                })
            },
        })}>
            {process.env.NODE_ENV !== "development" &&
                <GoogleAnalytics strategy="lazyOnload" gaMeasurementId='G-HSVTTS26JN'/>
            }
            <SessionProvider>
                <Component {...pageProps} />
            </SessionProvider>
        </ChakraProvider>
    </React.Fragment>
);

export default appWithTranslation(appCore)

