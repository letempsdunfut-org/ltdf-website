import languageDetector from '../../lib/lngDetector'
import { useRouter } from 'next/router'
import { Link, LinkProps } from '@chakra-ui/react'
import React from 'react';

const LanguageSwitchLink = ({ children, locale, ...rest }: { children: React.ReactNode, locale: string } & LinkProps) => {
    const router = useRouter()

    let href = rest.href || router.asPath
    let pName = router.pathname
    Object.keys(router.query).forEach((k) => {
        if (k === 'locale') {
            pName = pName.replace(`[${k}]`, locale)
            return
        }
        const remplaceCadidate = router.query[k] instanceof Array ? router.query[k]?.at(0)! : router.query[k] as string
        pName = pName.replace(`[${k}]`, remplaceCadidate)
    })
    if (locale) {
        href = rest.href ? `/${locale}${rest.href}` : pName
    }

    return (
        <Link
            href={href}
            onClick={() => languageDetector.cache?.(locale)}
        >
            {children}
        </Link>
    );
};

export default LanguageSwitchLink