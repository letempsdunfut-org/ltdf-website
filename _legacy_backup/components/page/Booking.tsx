import {useTranslation} from "next-i18next";
import {useMemo, useState} from "react";
import {fetchPostJSON} from "../../lib/api-helpers";
import Layout from "../shared/layout";
import Head from "next/head";
import imgCouverture from "../../public/images/couverture/trinque.jpg";
import {
    Alert, AlertIcon,
    Box, Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    VStack
} from "@chakra-ui/react";
import {nilOrInvalid, PRIMARY_COLOR} from "../shared/utils";
import iconBeer from "../../public/images/icons/degustation-transp.png";
import TitlePanel from "../shared/TitlePanel";
import FullPanel from "../shared/FullPanel";


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
    const [mailSent, setMailSent] = useState<boolean>()

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

    const cleanState = () => {
        setName(undefined)
        setLastname(undefined)
        setPhone(undefined)
        setMail(undefined)
        setCity(undefined)
        setPostalCode(undefined)
        setDeliveryService(undefined)
        setStart(undefined)
        setEnd(undefined)
        setDetail(undefined)
    }

    const submitClick = async () => {
        if (isValid) {
            const response = await fetchPostJSON('/api/mail', validObject)

            if (response.statusCode === 500) {
                console.error(response.message)
                return
            }
            cleanState()
            setMailSent(true)
            setTimeout(() => setMailSent(false), 800)
        }
    }

    const alertComponent = (mailSent) ? (
        <Box>
            <Alert status='success'>
                <AlertIcon/>
                {t('mailSent')}
            </Alert>
        </Box>
    ) : null

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('booking:pageTitle')}</title>
                </Head>
                <TitlePanel t={t} pageNameKey={"common:booking"} pageTitleColor={PRIMARY_COLOR}
                            titleKey={"common:booking"} pageLogo={iconBeer} bgImage={imgCouverture}
                            bgImageAlt={'booking:pageTitle'} >

                </TitlePanel>

                <FullPanel t={t} isInvert={true} headingTextKey={'booking:bookingWIP'} >
                    <Stack direction={{base: 'column', md: 'column'}} h={'100%'} bg={'white'} color={'#095d78'}  margin={'5vw'}
                           padding={'5%'}>
                        {alertComponent}
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
                            <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} w={'100%'}>
                                <FormControl isRequired>
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
                    </Stack>
                </FullPanel>
            </Layout>
        </>

    )
}
