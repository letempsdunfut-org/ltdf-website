import Head from 'next/head'
import { Box, Center, Heading, Image, Container, Stack, Button, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { getCsrfToken } from "next-auth/react"
import i18nextConfig from '../../../next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'




export default function Logout({ csrfToken }: { csrfToken: any }) {
    const { t } = useTranslation(['common', 'logout']);
    const name = t('logout:title');

    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <Container>
                <Stack as={Box} box={'center'} spacing={{ base: 1, md: 2 }} py={{ base: 5, md: 10 }} >
                    <Box p='4' >
                        <Center>
                            <Image
                                //priority
                                src="/images/logoLtdf.svg"
                                boxSize='30vh'
                                alt={name}
                            />
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
                    <Box p='4'>
                        <Center>
                            <Text> {t('logout:confirmation')}</Text>
                        </Center>
                    </Box>
                    <Box p='4'>
                        <Center>
                            <form action='/api/auth/signout' method='POST'>
                                <input type='hidden' name='csrfToken' value={csrfToken} />
                                <Button type='submit' backgroundColor={'#095d78'} color='white'>{t('logout')}</Button>
                            </form>
                        </Center>
                    </Box>
                </Stack>
            </Container>
        </>

    )
}


export const getServerSideProps = async (ctx: any) => {
    const locale = ctx?.params?.locale
    const i18n = await serverSideTranslations(locale, ['common', 'logout'], i18nextConfig);
    const csrfToken = await getCsrfToken(ctx);
    return ({
        props: {
            ...i18n,
            csrfToken
        },
    })
};