import React from 'react'
import {useRouter} from 'next/router'
import {Link, LinkProps} from '@chakra-ui/react'

const LinkComponent = ({children, skipLocaleHandling, ...rest}:
                           { children: React.ReactNode, skipLocaleHandling?: boolean }
                           & LinkProps
                           & { locale?: string }) => {
    const router = useRouter()
    const locale = rest.locale || router.query.locale || ''
    const clean = locale instanceof Array ? locale.at(0)! : locale

    let href = rest.href || router.asPath
    if (href.indexOf('http') === 0) skipLocaleHandling = true
    if (clean && !skipLocaleHandling) {
        href = href
            ? `/${locale}${href}`
            : router.pathname.replace('[locale]', clean)
    }

    return (
        <>
            <Link  {...rest} href={href} rel="canonical">
                {children}
            </Link>
        </>
    )
}

export default LinkComponent