import Head from 'next/head'
import Layout from '../../../components/shared/layout'
import {
    Box,
    VStack,
    Center,
    Heading,
    Button, FormControl, FormLabel, Input, HStack, Textarea, Select, Text, Stack
} from '@chakra-ui/react'
import Image from 'next/image'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {useTranslation} from 'next-i18next'
import imgCouverture from '../../../public/images/couverture/trinque.jpg';
import iconBeer from '../../../public/images/icons/degustation-transp.png'
import Panel from "../../../components/shared/Panel";
import {useMemo, useState} from "react";
import {isNil} from 'lodash'
import {fetchPostJSON} from "../../../lib/api-helpers";

const getStaticProps = makeStaticProps(['booking', 'common']);
export {getStaticPaths, getStaticProps};


type ContactFormInfo = {
    name: string,
    lastname: string,
    phone: string,
    mail: string
    city: string,
    postalCode: string
    deliveryService: string,
    start: string,
    end: string,
    detail: string
}

const nilOrInvalid = (aString: string | undefined) => {
    return isNil(aString) || aString.length <= 0
}

export default function Booking() {

    const {t} = useTranslation(['booking', 'common']);

    const [name, setName] = useState<string>()
    const [lastname, setLastname] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [mail, setMail] = useState<string>()
    const [city, setCity] = useState<string>()
    const [postalCode, setPostalCode] = useState<string>()
    const [deliveryService, setDeliveryService] = useState<string>()
    const [start, setStart] = useState<string>()
    const [end, setEnd] = useState<string>()
    const [detail, setDetail] = useState<string>()

    const isValid = !useMemo(() => nilOrInvalid(name) || nilOrInvalid(lastname) || nilOrInvalid(phone) || nilOrInvalid(mail) || nilOrInvalid(city) || nilOrInvalid(postalCode) || nilOrInvalid(deliveryService) || nilOrInvalid(start) || nilOrInvalid(end),
        [name, lastname, phone, mail, city, postalCode, deliveryService, start, end])

    const validObject = useMemo((): ContactFormInfo => {
            return {
                name,
                lastname,
                phone,
                mail,
                city,
                postalCode,
                deliveryService,
                start,
                end,
                detail
            } as ContactFormInfo
        },
        [name, lastname, phone, mail, city, postalCode, deliveryService, start, end, detail]
    )

    const submitClick = async () => {
        if (isValid) {
            const response = await fetchPostJSON('/api/mail', validObject)

            if (response.statusCode === 500) {
                console.error(response.message)
                return
            }
        }
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('booking:pageTitle')}</title>
                </Head>
                <Panel isInvert={false} imageData={imgCouverture} imageAltName={t('booking:pageTitle')}>
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
                                    alt={t('booking:pageTitle')}
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
                        <VStack w={'100%'} bg={'white'}  color={'#095d78'} alignItems={'center'} margin={'5vw'} padding={'5%'}>
                            <Box w={'100%'}>
                                <Heading as='h3' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center' color={'black'}>
                                    {t('booking:bookingWIP')}
                                </Heading>
                            </Box>
                            <Text textAlign={"justify"}>{t('booking:bookingInfo')}</Text>
                            <VStack color={'#095d78'} w={'100%'} spacing={6} padding={5}>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} w={'100%'}>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:firstname')}</FormLabel>
                                        <Input placeholder={t('booking:firstname')}
                                               onChange={event => setName(event.target.value)}/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:lastname')}</FormLabel>
                                        <Input placeholder={t('booking:lastname')}
                                               onChange={event => setLastname(event.target.value)}/>
                                    </FormControl>
                                </Stack>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} w={'100%'}>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:phone')}</FormLabel>
                                        <Input placeholder={t('booking:phone')}
                                               onChange={event => setPhone(event.target.value)}/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:email')}</FormLabel>
                                        <Input placeholder={t('booking:email')}
                                               onChange={event => setMail(event.target.value)}/>
                                    </FormControl>
                                </Stack>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} w={'100%'}>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:city')}</FormLabel>
                                        <Input placeholder={t('booking:city')}
                                               onChange={event => setCity(event.target.value)}/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:postalCode')}</FormLabel>
                                        <Input placeholder={t('booking:city')}
                                               onChange={event => setPostalCode(event.target.value)}/>
                                    </FormControl>
                                </Stack>
                                <FormControl isRequired>
                                    <FormLabel>{t('booking:deliveryService')}</FormLabel>
                                    <Select placeholder={t('booking:deliveryService')}
                                            onChange={event => setDeliveryService(event.target.value)}>
                                        <option
                                            value={t('booking:deliveryServiceOpt1')}>{t('booking:deliveryServiceOpt1')}</option>
                                        <option
                                            value={t('booking:deliveryServiceOpt2')}>{t('booking:deliveryServiceOpt2')}</option>
                                        <option
                                            value={t('booking:deliveryServiceOpt3')}>{t('booking:deliveryServiceOpt3')}</option>
                                        <option
                                            value={t('booking:deliveryServiceOpt4')}>{t('booking:deliveryServiceOpt4')}</option>
                                    </Select>
                                </FormControl>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} w={'100%'}>                                      <FormControl isRequired>
                                        <FormLabel>{t('booking:startDate')}</FormLabel>
                                        <Input type={"date"} max={end}
                                               onChange={event => setStart(event.target.value)}/>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>{t('booking:endDate')}</FormLabel>
                                        <Input type={"date"} min={start}
                                               onChange={event => setEnd(event.target.value)}/>
                                    </FormControl>
                                </Stack>
                                <FormControl>
                                    <FormLabel>{t('booking:detail')}</FormLabel>
                                    <Textarea placeholder={t('booking:detail')}
                                              onChange={event => setDetail(event.target.value)}/>
                                </FormControl>
                                <Box>
                                    <Button isDisabled={!isValid} backgroundColor={'#095d78'}
                                            color='white' onClick={submitClick}>{t('booking:submit')}</Button>
                                </Box>
                            </VStack>
                        </VStack>
                    </Center>
                </Panel>
            </Layout>
        </>

    )
}

