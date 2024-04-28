import {
    Avatar, Box,
    Button,
    Flex,
    HStack,
    IconButton, Link,
    Menu,
    MenuButton, MenuItem,
    MenuList, Stack,
    Text,
    useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import {AddIcon, CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import i18nextConfig from "../../next-i18next.config";
import React from "react";
import {useRouter} from "next/router";
import {TFunction} from "i18next";
import LinkComponent from "./LinkComponent";
import LanguageSwitchLink from "./LanguageSwitchLink";
import {usePagesLinks} from "../../lib/pagesLinks";

export default function HeaderMenu({t}: { t: TFunction<"common", "common"> }) {
    const router = useRouter()
    const {isOpen, onOpen, onClose} = useDisclosure();

    const links = usePagesLinks()

    const localemoji = (locale: String) => {
        if (locale === 'en') {
            return "🇺🇸"
        } else if (locale === 'fr') {
            return "🇫🇷"
        }
    }
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} width={'100%'}
             zIndex={'1'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                <HStack spacing={8} alignItems={'center'}>
                    <LinkComponent href='/'>
                        <Avatar
                            size={'sm'}
                            src={'/images/logoLtdf.svg'}
                            name={t('logoSite')}
                        />
                    </LinkComponent>
                    <IconButton
                        marginLeft={5}
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{base: 'none', md: 'flex'}}>
                        {links.map((link) => (
                            <LinkComponent px={2} py={1} rounded={'md'}
                                           _hover={{
                                               textDecoration: 'none',
                                               bg: 'gray.200',
                                           }}
                                           href={link.path}
                                           key={link.name}>
                                {link.name}
                            </LinkComponent>))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <LinkComponent href='/booking' _hover={{textDecoration: 'none'}}>
                        <Button
                            variant={'solid'}
                            backgroundColor={'#095d78'}
                            color={'white'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<AddIcon/>}>
                            {t('booking')}
                        </Button>
                    </LinkComponent>

                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            cursor={'pointer'}
                            minW={0} mr={4}>
                            <Text>{currentLocale}</Text>
                        </MenuButton>
                        <MenuList>
                            {i18nextConfig.i18n.locales.map((locale) => {
                                if (locale === currentLocale) return null
                                return (


                                    <LanguageSwitchLink
                                        locale={locale}
                                        key={locale}
                                    >
                                        <MenuItem key={locale}>
                                            {localemoji(locale)}
                                        </MenuItem>
                                    </LanguageSwitchLink>

                                )
                            })}

                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{md: 'none'}}>
                    <Stack as={'nav'} spacing={4}>
                        {links.map((link) => (
                            <Link rel="canonical" px={2} py={1} rounded={'md'}
                                  _hover={{
                                      textDecoration: 'none',
                                      bg: 'gray.200',
                                  }}
                                  href={link.path}
                                  key={link.name}>
                                {link.name}
                            </Link>))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )

}