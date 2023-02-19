import Head from 'next/head'
import Layout from '../../../components/layout'
import {
    Box,
    Center,
    Flex,
    Heading,
    HStack,
    IconButton,
    Link,
    Spacer,
    Text,
    Container,
    Stack,
    Button,
    ButtonGroup,
    Wrap,
    WrapItem,
    VStack
} from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/icons'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {useTranslation} from 'next-i18next'
import coco from '../../../public/images/coco.png'
import Image from 'next/image'
import imgCouverture from "../../../public/images/couverture/party-cover.jpg";
import iconFut from "../../../public/images/icons/futs-transp.png";


const getStaticProps = makeStaticProps(['history', 'common']);
export {getStaticPaths, getStaticProps};

export default function History() {
    const {t} = useTranslation(['history', 'common']);
    const name = t('common:title');

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('history:pageTitle')}</title>
                </Head>
                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"}>
                    <Image
                        src={imgCouverture}
                        alt={name}
                        loading="lazy"
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray'}}
                    />
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                           maxHeight='max'>
                        <Box w='100%' h='100%'>
                            <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                     lineHeight={'110%'} textAlign='center' position={'relative'}
                                     textTransform={'uppercase'}
                                     margin={'44px'}
                                     color={'white'}>
                                {t("common:about_us")}
                            </Heading>
                        </Box>
                    </Stack>
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
                </Container>

                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}
                           backgroundColor={'#095d78'} color={'white'}>

                    <VStack spacing={8} alignItems={'center'} w={'100%'} h={'100%'}>
                        <Box>
                            <Stack direction={['column', 'row']} spacing={4}>
                                <Center>
                                    <Box w={"60%"}>
                                        <Center>
                                            <Text textAlign={'justify'}> {t('one')} </Text>
                                        </Center>
                                    </Box>
                                    <Box boxSize={'25vh'} ml={5}>
                                        <Image
                                            src={coco}
                                            alt={name}
                                            loading="lazy"
                                            style={{borderRadius: '50%'}}
                                        />
                                    </Box>
                                </Center>

                            </Stack>

                        </Box>
                        <Box>
                            <Stack direction={['column', 'row']}>
                                <Center>
                                    <Box boxSize={'25vh'}>
                                        <Image
                                            src={coco}
                                            alt={name}
                                            loading="lazy"
                                            style={{borderRadius: '50%'}}
                                        />
                                    </Box>
                                    <Box w={"60%"} ml={5}>
                                        <Center>
                                            <Text textAlign={'justify'}> {t('two')} </Text>
                                        </Center>
                                    </Box>
                                </Center>

                            </Stack>

                        </Box>
                        <Box>
                            <Stack direction={['column', 'row']}>
                                <Center>
                                    <Box w={"60%"}>
                                        <Center>
                                            <Text textAlign={'justify'}> {t('three')} </Text>
                                        </Center>
                                    </Box>
                                    <Box boxSize={'25vh'} ml={5}>
                                        <Image
                                            src={coco}
                                            alt={name}
                                            loading="lazy"
                                            style={{borderRadius: '50%'}}
                                        />
                                    </Box>
                                </Center>

                            </Stack>

                        </Box>
                    </VStack>

                </Container>
            </Layout>
        </>
    )
}

