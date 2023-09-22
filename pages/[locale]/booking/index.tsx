import Head from 'next/head'
import Layout from '../../../components/shared/layout'
import {
    Box,
    VStack,
    Center,
    Heading,
    Text,
    Container,
    Stack,
    Button, FormControl, FormLabel, Input, HStack, Textarea
} from '@chakra-ui/react'
import Image from 'next/image'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {useTranslation} from 'next-i18next'
import imgCouverture from '../../../public/images/couverture/trinque.jpg';
import iconBeer from '../../../public/images/icons/degustation-transp.png'
import Panel from "../../../components/shared/Panel";

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
                <Panel isInvert={false} imageData={imgCouverture} imageAltName={name}>
                    <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>
                        <VStack spacing={5} alignItems={'center'} h={"fit"}>
                            <Box w='100%' h='100%'>
                                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center' position={'relative'} color={'white'}>
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
                </Panel>
                <Panel isInvert={true}>
                    <Center w='100%' h='100%'>
                        <VStack w='50%' h='50%' bg={'white'} alignItems={'center'} padding={'5%'}>
                            <Box w={'100%'}>
                                <Heading as='h3' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center' color={'black'}>
                                    {t('booking:bookingWIP')}
                                </Heading>
                            </Box>
                            <Box color={'#095d78'} w={'100%'}>
                                <HStack w='100%'>
                                    <FormControl isRequired>
                                        <FormLabel>Prénom</FormLabel>
                                        <Input placeholder='Prénom'/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Nom</FormLabel>
                                        <Input placeholder='Nom'/>
                                    </FormControl>
                                </HStack>
                                <HStack w='100%'>
                                    <FormControl isRequired>
                                        <FormLabel>Téléphone</FormLabel>
                                        <Input placeholder='Téléphone'/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Courriel</FormLabel>
                                        <Input placeholder='Courriel'/>
                                    </FormControl>
                                </HStack>
                                <HStack w='100%'>
                                    <FormControl isRequired>
                                        <FormLabel>Ville</FormLabel>
                                        <Input placeholder='Ville'/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Code postal</FormLabel>
                                        <Input placeholder='Code postal'/>
                                    </FormControl>
                                </HStack>
                                <FormControl isRequired>
                                    <FormLabel>Service de livraison</FormLabel>
                                    <Input placeholder='Service de livraison'/>
                                </FormControl>
                                <HStack w='100%'>
                                    <FormControl isRequired>
                                        <FormLabel>Date de début de l'événement</FormLabel>
                                        <Input type={"date"}/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Date de fin de l'événement</FormLabel>
                                        <Input type={"date"}/>
                                    </FormControl>
                                </HStack>
                                <FormControl isRequired>
                                    <FormLabel>Autres détails</FormLabel>
                                    <Textarea placeholder='Autres détails'/>
                                </FormControl>
                            </Box>
                            <Box>
                                <a href='mailto:order@letempsdunfut.ca'>
                                    <Button backgroundColor={'#095d78'}
                                            color='white'>{t('common:contactUs')}</Button>
                                </a>
                            </Box>
                        </VStack>
                    </Center>
                </Panel>
            </Layout>
        </>

    )
}

