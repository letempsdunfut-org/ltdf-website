import Head from 'next/head'
import Layout from '../../../components/layout'
import {
    Box,
    VStack,
    Center,
    InputLeftElement,
    Flex,
    Checkbox,
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
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/icons'
import Image from 'next/image'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {useTranslation} from 'next-i18next'
import imgCouverture from '../../../public/images/couverture/trinque.jpg';
import iconBeer from '../../../public/images/icons/degustation-transp.png'

const getStaticProps = makeStaticProps(['booking', 'common']);
export {getStaticPaths, getStaticProps};

export default function Booking() {
    const {t} = useTranslation(['booking', 'common']);
    const name = t('common:title');

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('booking:pageTitle')}</title>
                </Head>
              <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"}>
                    <Image
                        src={imgCouverture}
                        alt={name}
                        loading="lazy"
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray', filter: 'grayscale(100%)'}}
                    />
                    <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>
                        <VStack spacing={5} alignItems={'center'} h={"fit"}>
                            <Box w='100%' h='100%'>
                                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center'>
                                    {t("common:booking")}
                                </Heading>

                            </Box>
                            <Box>
                                <Image
                                    src={iconBeer}
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
                    <VStack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                           maxHeight='max'>
                        <Box w='100%' h='100%'>
                            <Center bg={'white'}>
                                <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                                    <Heading as='h3' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('booking:bookingWIP')}
                                    </Heading>
                                    <Center>
                                        <Text>{t('booking:bookingWIPText')}</Text>
                                    </Center>
                                    <Center>
                                        <Button
                                            onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>{t('common:contactUs')}</Button>
                                    </Center>
                                </Stack>
                            </Center>
                        </Box>
                    </VStack>
                </Container>
            </Layout>
        </>

    )
}

