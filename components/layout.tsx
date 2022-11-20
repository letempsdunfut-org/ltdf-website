import Head from 'next/head'
import { IconButton, Container, Box, Stack, HStack, Flex, useColorModeValue, useDisclosure, Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react';
import { CloseIcon, HamburgerIcon, AddIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next'

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
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} width={'100%'}>
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
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Button
                variant={'solid'}
                colorScheme={'teal'}
                size={'sm'}
                mr={4}
                leftIcon={<AddIcon />}>
                Action
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
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>{t('logout')}</MenuItem>
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
