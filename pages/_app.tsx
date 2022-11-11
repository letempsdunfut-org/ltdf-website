import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { Montserrat } from '@next/font/google'
import { GoogleAnalytics } from "nextjs-google-analytics";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme({
      fonts: {
        heading: montserrat.style.fontFamily,
        body: montserrat.style.fontFamily,
      }
    })}>
      <GoogleAnalytics strategy="lazyOnload" gaMeasurementId='G-HSVTTS26JN' />
      <Component {...pageProps} />
    </ChakraProvider>

  );
}
