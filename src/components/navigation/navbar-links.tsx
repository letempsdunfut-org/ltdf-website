'use client'
import { Button, Stack, type StackProps } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { Link, Routes } from '@/i18n/routing'

export const NavbarLinks = (props: StackProps) => {
    const t = useTranslations('apps.home')

    const links = [
        { label: t('navRentalDaily'), href: Routes.RENTAL_DAILY },
        { label: t('navRentalMonthly'), href: Routes.RENTAL_MONTHLY },
        { label: t('navProfessional'), href: Routes.PROFESSIONAL },
        { label: t('navProduct'), href: Routes.PRODUCT },
    ]

    return (
        <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: '6', md: '8' }} alignItems={{ base: 'flex-start', md: 'center' }} {...props}>
            {links.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    style={{ fontWeight: 500 }}
                >
                    {item.label}
                </Link>
            ))}
            <Stack gap="3" direction={{ base: 'column', md: 'row' }} alignItems="center">
                <Link href={Routes.BOOKING}>
                    <Button colorPalette="orange">{t('navContact')}</Button>
                </Link>
            </Stack>
        </Stack>
    )
}
