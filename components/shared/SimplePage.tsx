import Layout from "./layout";
import Head from "next/head";
import React from "react";
import {Namespace, TFunction} from "i18next";
import TitlePanel from "./TitlePanel";
import {StaticImageData} from "next/image";

export type SimplePageProps = {
    t: TFunction<Namespace<string>, undefined, string>
    pageTitleKey: string
    title: {
        bgImage?: StaticImageData
        bgImageAlt?: string
        pageLogo?: StaticImageData
        pageLogoBg?: string,
        titleColor: string
        titleKey: string
        children: React.ReactNode
    }
    panels: React.ReactNode[]
}

export default function SimplePage({
                                       t,
                                       pageTitleKey,
                                       title,
                                       panels
                                   }: SimplePageProps) {
    const {
        titleColor,
        pageLogo,
        pageLogoBg,
        bgImage,
        bgImageAlt,
        titleKey,
        children: titleChildren
    } = title

    return (
        <Layout>
            <Head>
                <title>{t(pageTitleKey)}</title>
            </Head>
            <TitlePanel t={t}
                        pageNameKey={pageTitleKey}
                        pageTitleColor={titleColor}
                        pageLogo={pageLogo}
                        pageLogoBg={pageLogoBg}
                        bgImage={bgImage}
                        bgImageAlt={bgImageAlt}
                        titleKey={titleKey}
            >
                {titleChildren}
            </TitlePanel>
            {panels.map((value, index) => value)}
        </Layout>
    )
}