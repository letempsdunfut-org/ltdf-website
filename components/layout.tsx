import Head from 'next/head'
import { IconButton, Image, Container, Box, Stack, HStack, Flex, useColorModeValue, useDisclosure, Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { CloseIcon, HamburgerIcon, AddIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next'
import { useSession } from "next-auth/react"
import { Link } from '@chakra-ui/react'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link px={2} py={1} rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);


export default function Layout({
  children }: {
    children: React.ReactNode
  }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('common')
  const Links = [t('product'), t('rental'), t('about_us')];
  const { data: session } = useSession()
  const profileImg = session && session.user ? session?.user.image! : "/images/notLoggedUser.svg"
  const loginLogout = session && session.user ? <Link href='/api/auth/signout'>{t('logout')}</Link> : <Link href='/api/auth/signin'>{t('login')}</Link>
  return (
    <div>
      <Head>
        <link rel="icon" href="/faviconltdf.ico" />
        <meta
          name="description"
          content="Location de tireuse à bière et/ou kombucha pour entreprises et particuliers sur l’île de Montréal."
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
                <Avatar
                  size={'sm'}
                  src={'/images/logoLtdf.svg'}
                />
              </Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <HStack spacing={8}>
                  <IconButton aria-label='go to Facebook' backgroundColor='gray.100'
                    icon={<Image borderRadius='full' src="/images/Facebook_f_logo_(2021).svg" alt='Facebook logo' />}
                    onClick={() => { window.open('https://www.facebook.com/people/Le-temps-dun-f%C3%BBt/100087660347259/') }} />


                  <IconButton aria-label='go to Instagram' backgroundColor='gray.100'
                    icon={<Image boxSize="40px" src="/images/Instagram_logo_2016.svg" alt='Instagram logo' />}
                    onClick={() => { window.open('https://www.instagram.com/ltdf_qc/') }} />
                </HStack>
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Button
                variant={'solid'}
                backgroundColor={'#095d78'}
                color={'white'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}>
                {t('rent')}
              </Button>
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
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    {loginLogout}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>

        <Box p={1}>
          <main >{children}</main>
        </Box>
      </>

    </div >
  )
}
