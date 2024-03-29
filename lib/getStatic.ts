import i18nextConfig from '../next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getCsrfToken } from "next-auth/react"



export const getI18nPaths = () =>
    i18nextConfig.i18n.locales.map((lng) => ({
        params: {
            locale: lng,
        },
    }))

export const getStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths(),
})

export const getI18nProps = async (ctx: any, ns: string[] = ['common']) => {
    const locale = ctx?.params?.locale
    let props = {
        ... (await serverSideTranslations(locale, ns)),
    }
    return props
}

export const makeStaticProps = (ns: string[] = []) => async (ctx: any) => ({
    props: await getI18nProps(ctx, ns),
})