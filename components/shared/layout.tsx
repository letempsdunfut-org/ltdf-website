import Head from 'next/head'
import {Flex} from '@chakra-ui/react'
import {useTranslation} from 'next-i18next'
import React from "react";
import HeaderMenu from "./HeaderMenu";
import Footer from "./Footer";


export default function Layout({children}: { children: React.ReactNode }) {

    const {t} = useTranslation('common')

    return (
        <div style={{width: '100%'}}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content={t('description')}
                />
                <meta
                    property="og:image"
                    content="https://deft-moxie-184876.netlify.app/images/logoLtdf.svg"
                />
                <meta name="og:title" content={t('title')}/>
                <meta name={"viewport"}
                      content={"width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"}></meta>

            </Head>
            <>
                <HeaderMenu t={t}/>
                <Flex direction="column" flex="1">
                    <main>{children}</main>
                </Flex>
                <Footer t={t}/>
            </>

        </div>
    )
}
