import Head from 'next/head'
import { IconButton, Text, Container, Box, Stack, HStack, Flex, useColorModeValue, useDisclosure, Avatar, Button, Menu, MenuButton, MenuItem, MenuList, keyframes } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { CloseIcon, HamburgerIcon, AddIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next'
import { useSession } from "next-auth/react"
import { Link } from '@chakra-ui/react'
import Image from 'next/image'
import LinkComponent from './LinkComponent ';
import LanguageSwitchLink from './LanguageSwitchLink ';
import i18nextConfig from '../next-i18next.config'
import { useRouter } from 'next/router';


export default function Layout({
  children }: {
    children: React.ReactNode
  }) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('common')
  const Links = [
    { name: t('rental'), path: '/rental' },
    { name: t('product'), path: '/product' },
    { name: t('about_us'), path: '/history' }
  ];
  const { data: session } = useSession()
  const profileImg = session && session.user ? session?.user.image! : "/images/notLoggedUser.svg"
  const loginLogout = session && session.user ? <LinkComponent href='/auth/logout' _hover={{ textDecoration: 'none' }}><MenuItem>{t('logout')}</MenuItem></LinkComponent> : <LinkComponent href='/auth/login' _hover={{ textDecoration: 'none' }}><MenuItem>{t('login')}</MenuItem></LinkComponent>
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={t('description')}
        />
        <meta
          property="og:image"
          content="https://deft-moxie-184876.netlify.app/images/logoLtdf.svg"
        />
        <meta name="og:title" content={t('title')} />
      </Head>
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} width={'100%'} zIndex={'1'}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <LinkComponent href='/'>
                  <Avatar
                    size={'sm'}
                    src={'/images/logoLtdf.svg'}
                    name={t('logoSite')}
                  />
                </LinkComponent>
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <LinkComponent px={2} py={1} rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200',
                    }}
                    href={link.path}
                    key={link.name} >
                    {link.name}
                  </LinkComponent>))}
                <HStack spacing={8}>
                  <IconButton aria-label={t('facebookLogoLabel')} backgroundColor='gray.100'
                    icon={<Image fill={true} sizes={'40px'} src="/images/Facebook_f_logo_(2021).svg" alt={t('facebookLogoAlt')} />}
                    onClick={() => { window.open('https://www.facebook.com/people/Le-temps-dun-f%C3%BBt/100087660347259/') }} />


                  <IconButton aria-label={t('instagramLogoLabel')} backgroundColor='gray.100'
                    icon={<Image fill={true} sizes={'40px'} src="/images/Instagram_logo_2016.svg" alt={t('instagramLogoAlt')} />}
                    onClick={() => { window.open('https://www.instagram.com/ltdf_qc/') }} />
                </HStack>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <LinkComponent href='/booking' _hover={{ textDecoration: 'none' }}>
                <Button
                  variant={'solid'}
                  backgroundColor={'#095d78'}
                  color={'white'}
                  size={'sm'}
                  mr={4}
                  leftIcon={<AddIcon />}>
                  {t('booking')}
                </Button>
              </LinkComponent>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0} mr={4}>
                  <Text>{t('changeLang')}</Text>
                </MenuButton>
                <MenuList>
                  {i18nextConfig.i18n.locales.map((locale) => {
                    if (locale === currentLocale) return null
                    return (


                      <LanguageSwitchLink
                        locale={locale}
                        key={locale}
                      >
                        <MenuItem key={locale}  >
                          {locale}
                        </MenuItem>
                      </LanguageSwitchLink>

                    )
                  })}

                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={
                      profileImg
                    }
                    name={t('logoProfile')}
                  />
                </MenuButton>
                <MenuList>
                  {loginLogout}
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <Link px={2} py={1} rounded={'md'}
                    _hover={{
                      textDecoration: 'none',
                      bg: 'gray.200',
                    }}
                    href={link.path}
                    key={link.name} >
                    {link.name}
                  </Link>))}
              </Stack>
            </Box>
          ) : null}
        </Box>

        <Box p={1}>
          <main >{children}</main>
          <Container minHeight={'calc(30vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'white'} color={'#095d78'}>

          </Container>
        </Box>
      </>

    </div >
  )
}
