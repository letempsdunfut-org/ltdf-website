import Head from 'next/head'
import Layout from '../../../components/layout'
import {
    Box,
    Center,
    Heading,
    Text,
    Container,
    Stack,
    Button,
    VStack,
    List,
    ListIcon,
    ListItem,
    Wrap, WrapItem
} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {Trans, useTranslation} from 'next-i18next'
import LinkComponent from '../../../components/LinkComponent '
import Image from "next/image";
import imgCouverture from "../../../public/images/couverture/private-party-cover.jpg";
import iconPromo from '../../../public/images/icons/promotions-transp.png'
import iconBeer from "../../../public/images/icons/degustation-transp.png";

const getStaticProps = makeStaticProps(['rental', 'common']);
export {getStaticPaths, getStaticProps};

export default function Rental() {
    const {t} = useTranslation(['rental', 'common']);
    const name = t('common:title');

    const magicRatio = ['95%', '95%', '90%', '80%', '70%', '60%'];

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('rental:pageTitle')}</title>
                </Head>
                <Container minHeight={'95vh'} maxHeight={'95vh'} maxW='100%' paddingTop={'16'} position={"relative"}>
                    <Image
                        src={imgCouverture}
                        alt={name}
                        loading="lazy"
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray'}}
                    />

                    <Center minH={'90vh'} maxHeight='max' maxW='100%'>
                        <VStack spacing={5} alignItems={'center'} h={"fit"}>
                            <Box>
                                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center' position={'relative'}
                                         textTransform={'uppercase'}
                                         margin={'44px'}
                                         color={'white'}>
                                    {t("common:rental")}
                                </Heading>
                            </Box>

                            <Box>

                                <Image
                                    src={iconPromo}
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
                <Container minHeight={'95vh'} maxHeight='max' maxW='100%' paddingTop={'16'}
                           backgroundColor={'#095d78'} color={'white'}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'80vh'}
                           maxHeight='max'>
                        <Center>
                            <Box w={magicRatio} h='100%'>
                                <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                                    <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('retntalDraftTitle')}
                                    </Heading>
                                    <Center>
                                        <VStack textAlign={'justify'}>
                                            <Text w='100%' textAlign={"justify"} as={'cite'}>
                                                <strong>{t('deliveryCta')}</strong>
                                            </Text>
                                            <Trans i18nKey='retntalDraftText' t={t}
                                                   components={{text: <Text/>, bold: <strong/>}}>
                                            </Trans>
                                            <Box paddingLeft={30}>
                                                <List spacing={3} w='100%' h='100%'>
                                                    <Trans i18nKey='rentalDraftList' t={t}
                                                           components={{
                                                               text: <Text/>,
                                                               bold: <strong/>,
                                                               listItem: <ListItem/>,
                                                               listIcon: <ListIcon as={AddIcon} color='#FF893B'/>
                                                           }}>
                                                    </Trans>
                                                </List>
                                            </Box>
                                            <Text>
                                                <Trans i18nKey='rentalDraftConclusion' t={t}
                                                       components={{bold: <strong/>}}>
                                                </Trans>
                                            </Text>
                                        </VStack>
                                    </Center>
                                    <Center>
                                        <LinkComponent href='/booking' _hover={{textDecoration: 'none'}}><Button
                                            backgroundColor={'white'} color='#095d78'>{t('book')}</Button>
                                        </LinkComponent>
                                    </Center>
                                </Stack>
                            </Box>
                        </Center>
                    </Stack>
                </Container>
                <Container minHeight={'95vh'} maxHeight='max' maxW='100%' paddingTop={'16'}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'80vh'}
                           maxHeight='max'>
                        <Center w='100%' h='100%'>
                            <Box w={magicRatio} h='100%'>
                                <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}
                                       w='100%' h='100%'>
                                    <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('rentalEventTitle')}
                                    </Heading>
                                    <Center w='100%' h='100%'>
                                        <VStack w='100%' h='100%' textAlign={'justify'}>
                                            <Trans i18nKey='rentalEventText' t={t}
                                                   components={{text: <Text/>, bold: <strong/>}}>
                                            </Trans>
                                        </VStack>
                                    </Center>
                                    <Center>
                                        <LinkComponent href='/booking' _hover={{textDecoration: 'none'}}> <Button
                                           >{t('book')}</Button>
                                        </LinkComponent>
                                    </Center>
                                </Stack>
                            </Box>
                        </Center>

                    </Stack>
                </Container>
            </Layout>
        </>

    )
}

