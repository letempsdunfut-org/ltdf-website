import Head from 'next/head'
import Layout from '../../../components/shared/layout'
import {
    Box,
    Center,
    Heading,
    Text,
    Container,
    Stack,
    Button,
    VStack
} from '@chakra-ui/react'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {Trans, useTranslation} from 'next-i18next'
import Image from 'next/image'
import imgCouverture from "../../../public/images/couverture/party-cover.jpg";
import iconFut from "../../../public/images/icons/futs-transp.png";


const getStaticProps = makeStaticProps(['professional', 'common']);
export {getStaticPaths, getStaticProps};

export default function Professional() {
    const {t} = useTranslation(['professional', 'common']);
    const name = t('common:title');
    const magicRatio = ['95%', '85%', '80%', '70%', '60%', '50%'];

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('professional:pageTitle')}</title>
                </Head>
                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"}>
                    <Image
                        src={imgCouverture}
                        alt={name}
                        loading="lazy"
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray'}}
                    />
                    <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>
                        <VStack spacing={5} alignItems={'center'} h={"fit"}>
                            <Box w='100%' h='100%'>
                                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center' position={'relative'}
                                         textTransform={'uppercase'}
                                         margin={'44px'}
                                         color={'white'}>
                                    {t("common:professional")}
                                </Heading>
                            </Box>
                            <Box>
                                <Image
                                    src={iconFut}
                                    alt={name}
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        bottom: '26px',
                                        left: 0,
                                        right: 0,
                                        backgroundColor: 'white',
                                        borderRadius: '50%',
                                        width: '75px',
                                        margin: 'auto',
                                        padding: '6px'
                                    }}
                                />
                            </Box>
                        </VStack>
                    </Center>
                </Container>

                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}
                           backgroundColor={'#095d78'} color={'white'}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                           maxHeight='max'>
                        <Center textAlign={'justify'}>
                            <Box w={magicRatio} h='100%'>
                                <Stack as={Box}align={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                                    <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('microTitle')}
                                    </Heading>
                                    <Center>
                                        <Text>{t('microTxt')}</Text>
                                    </Center>
                                    <Center>
                                        <a href='mailto:contact@letempsdunfut.ca'>
                                            <Button backgroundColor={'white'}
                                                    color='#095d78'>{t('common:contactUs')}</Button>
                                        </a>
                                    </Center>
                                    <Heading as='h4' fontWeight={200} fontSize={{base: '1xl', sm: 'xl', md: '3xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('partnerTitle')}
                                    </Heading>
                                    <Center>
                                        <Text>{t('partnerTxt')}</Text>
                                    </Center>
                                    <Center>
                                        <a href='mailto:contact@letempsdunfut.ca'>
                                            <Button backgroundColor={'white'}
                                                    color='#095d78'>{t('common:contactUs')}</Button>
                                        </a>
                                    </Center>
                                </Stack>
                            </Box>
                        </Center>
                    </Stack>
                </Container>

                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
                    <Stack as={Box}align={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                        <Center>
                            <Box w={magicRatio} h='100%'>

                                <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center'>
                                    {t('companyTitle')}
                                </Heading>
                            </Box>
                        </Center>

                        <Box>
                            <Center>
                                <VStack spacing={6} textAlign={'justify'} w={magicRatio}>
                                    <Trans i18nKey='companyTxt' t={t}
                                           components={{
                                               text: <Text/>,
                                               bold: <strong/>,
                                               box: <Box verticalAlign='middle' fontWeight='normal' px='5'
                                                         lineHeight='tall' position='relative' textAlign={'justify'}
                                                         _before={{
                                                             content: `\"\"`,
                                                             position: 'absolute',
                                                             display: 'block',
                                                             left: '-1%',
                                                             borderLeftWidth: '0.5rem',
                                                             borderLeftColor: '#FF893B',
                                                             height: '100%'
                                                         }}/>
                                           }}>
                                    </Trans>
                                </VStack>
                            </Center>
                        </Box>
                        <Center>
                            <a href='mailto:contact@letempsdunfut.ca'>
                                <Button backgroundColor={'#095d78'}
                                        color='white'>{t('common:contactUs')}</Button>
                            </a>
                        </Center>
                    </Stack>
                </Container>

            </Layout>
        </>
    )
}

