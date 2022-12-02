import Head from 'next/head'
import { Box, Center, Heading, Container, Stack, Button, Avatar, Flex, Text, AspectRatio } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { getCsrfToken } from "next-auth/react"
import i18nextConfig from '../../../next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'




export default function Logout({ csrfToken }: { csrfToken: any }) {
    const { t } = useTranslation(['common', 'login']);
    const name = t('login:title');

    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <Container>
                <Stack as={Box} box={'center'} spacing={{ base: 1, md: 2 }} py={{ base: 5, md: 10 }} >
                    <Box p='4' >
                        <Center>
                            <AspectRatio ratio={1 / 1} boxSize='30vh'>
                                <Image
                                    //priority
                                    src="/images/logoLtdf.svg"
                                    fill={true}
                                    sizes='30vh'
                                    alt={name}
                                />
                            </AspectRatio>

                        </Center>

                    </Box>
                    <Box p='4'>
                        <Heading as='h1'
                            fontWeight={600}
                            fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }}
                            lineHeight={'110%'}
                            textAlign='center' >
                            {t('common:title')}
                        </Heading>
                    </Box>
                    <Box p='2'>
                        <Center>
                            <Stack as={Box} box={'center'} >
                                <form action='/api/auth/signin/google' method='POST' >
                                    <Center p={2}>
                                        <Button
                                            type='submit'
                                            w={'full'}
                                            maxW={'md'}
                                            variant={'outline'}
                                            leftIcon={<Avatar
                                                size={'sm'}
                                                src={'/images/Google.svg'}
                                            />}>
                                            <Center>
                                                <Text>{t('login:google')}</Text>
                                            </Center>
                                        </Button>
                                    </Center>
                                    <input type='hidden' name='csrfToken' value={csrfToken} />
                                </form>
                                <form action='/api/auth/signin/facebook' method='POST' style={{ display: 'flex' }}>
                                    <input type='hidden' name='csrfToken' value={csrfToken} />
                                    <Center p={2}>
                                        <Button
                                            type='submit'
                                            w={'full'}
                                            maxW={'md'}
                                            colorScheme={'facebook'}
                                            leftIcon={<Avatar
                                                size={'sm'}
                                                src={'/images/Facebook_f_logo_(2021).svg'}
                                                alignItems={'flex-start'}
                                                marginRight={'auto'}
                                            />}>
                                            <Center>
                                                <Text>{t('login:facebook')}</Text>
                                            </Center>
                                        </Button>
                                    </Center>
                                </form>
                                <form action='/api/auth/signin/apple' method='POST' >
                                    <Center p={2}>
                                        <Button
                                            type='submit'
                                            w={'full'}
                                            maxW={'md'}
                                            variant={'outline'}
                                            leftIcon={<Image
                                                width={'20'}
                                                height={'20'}
                                                src={'/images/Apple_logo_black.svg'}
                                                alt='apple logo'
                                            />}>
                                            <Center>
                                                <Text>{t('login:apple')}</Text>
                                            </Center>
                                        </Button>
                                    </Center>
                                    <input type='hidden' name='csrfToken' value={csrfToken} />
                                </form>
                            </Stack >
                        </Center>
                    </Box>
                </Stack>
            </Container>
        </>

    )
}


export const getServerSideProps = async (ctx: any) => {
    const locale = ctx?.params?.locale
    const i18n = await serverSideTranslations(locale, ['common', 'login'], i18nextConfig);
    const csrfToken = await getCsrfToken(ctx);
    return ({
        props: {
            ...i18n,
            csrfToken
        },
    })
};