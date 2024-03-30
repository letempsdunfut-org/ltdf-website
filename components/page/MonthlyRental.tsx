import {Trans, useTranslation} from "next-i18next";
import Layout from "../shared/layout";
import Head from "next/head";
import {Box, Button, Center, Stack, Text, VStack} from "@chakra-ui/react";
import kegkumImg from "../../public/images/kegkumLight.png";
import imgCouverture from "../../public/images/couverture/private-party-cover.jpg";
import React from "react";
import TitlePanel from "../shared/TitlePanel";
import SplitPanel from "../shared/SplitImageTextPanel";


export default function MonthlyRental() {
    const {t} = useTranslation(['monthlyRental', 'common']);

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('monthlyRental:pageName')}</title>
                </Head>

                <TitlePanel t={t}
                            bgImage={imgCouverture}
                            bgImageAlt={'pageName'}
                            pageNameKey={'pageName'}
                            pageLogo={kegkumImg}
                            pageLogoBg={'#095d78'}
                            pageTitleColor={"orange"}
                            titleKey={'title'}
                >

                    <Trans i18nKey='subTitle' t={t} components={{
                        vstack: <VStack alignItems={'center'}/>,
                        text: <Text position={`relative`}
                                    color={'orange.900'}
                                    fontSize={{base: '2xl', sm: 'xl', md: '3xl'}}/>,
                        bold: <strong/>,
                    }}>
                    </Trans>
                </TitlePanel>

                <SplitPanel t={t} isInvert={true} headingTextKey={'KombuOffer'}
                            textElement={
                                <VStack w='100%' h='100%' textAlign={'justify'}>
                                    <Box>
                                        <Trans i18nKey='KombuOfferExplain' t={t}
                                               components={{
                                                   text: <Text/>,
                                               }}>
                                        </Trans>
                                    </Box>
                                    <Box>
                                        <Trans i18nKey='KombuOfferPitch' t={t}
                                               components={{
                                                   text: <Text/>,
                                               }}>
                                        </Trans>
                                    </Box>
                                    <Box>
                                        <Stack direction={['column', 'row']} alignItems={'center'}
                                               textAlign={'justify'}>
                                            <Box backgroundColor={'blue.50'} color={'black'} padding={'2vw'}>
                                                <Trans i18nKey='KombuOfferContent1' t={t}
                                                       components={{
                                                           text: <Text/>,
                                                           li: <li/>,
                                                           a: <a href={'https://gutsykombucha.com/'}/>
                                                       }}>
                                                </Trans>
                                            </Box>
                                            <Box backgroundColor={'blue.50'} color={'black'} padding={'2vw'}>

                                                <Trans i18nKey='KombuOfferContent2' t={t} h="full"
                                                       components={{
                                                           text: <Text/>,
                                                           li: <li/>,
                                                       }}>
                                                </Trans>

                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <Center>
                                            <a href='mailto:contact@letempsdunfut.ca'> <Button
                                                backgroundColor={'white'}
                                                color='#095d78'>{t('ContactUs')}</Button>
                                            </a>
                                        </Center>
                                    </Box>
                                </VStack>
                            }
                            isImageLeft={true}
                            imageSrc={kegkumImg}
                            imageAltKey={'monthlyRental:pageName'}
                            imageStyle={{position: 'relative', backgroundColor: '#095d78', borderRadius: '50%'}}
                />
            </Layout>
        </>

    )
}