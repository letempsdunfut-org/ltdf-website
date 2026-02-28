import { Box, Container, HStack } from '@chakra-ui/react'
import { Logo } from './logo'
import { MobilePopover } from './mobile-popover'
import { NavbarLinks } from './navbar-links'
import { Link, Routes } from '@/i18n/routing'
import { ColorModeButton } from '@/components/ui/color-mode'
import { LocaleSwitcher } from './locale-switcher'

export const TopNavbar = () => {
    return (
        <Box borderBottomWidth="1px" bg="bg.panel">
            <Container py={{ base: '3.5', md: '4' }}>
                <HStack justify="space-between">
                    <Link href={Routes.HOME}>
                        <Logo />
                    </Link>
                    <NavbarLinks hideBelow="md" />
                    <HStack hideFrom="md">
                        <LocaleSwitcher />
                        <ColorModeButton />
                        <MobilePopover>
                            <NavbarLinks />
                        </MobilePopover>
                    </HStack>
                    <HStack hideBelow="md">
                        <LocaleSwitcher />
                        <ColorModeButton />
                    </HStack>
                </HStack>
            </Container>
        </Box>
    )
}
