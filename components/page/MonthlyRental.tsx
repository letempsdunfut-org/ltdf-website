import {Trans, useTranslation} from "next-i18next";
import Layout from "../shared/layout";
import Head from "next/head";
import {Box, Button, Center, Link, Stack, Text, VStack} from "@chakra-ui/react";
import kegkumImg from "../../public/images/kegkumLight.png";
import office from "../../public/images/couverture/office.jpg";

import React from "react";
import TitlePanel from "../shared/TitlePanel";
import SplitPanel from "../shared/SplitImageTextPanel";
import {PRIMARY_COLOR} from "../shared/utils";


export default function MonthlyRental() {
    const {t} = useTranslation(['monthlyRental', 'common']);

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('monthlyRental:pageName')}</title>
                </Head>

                <TitlePanel t={t}
                            bgImage={office}
                            bgImageAlt={'pageName'}
                            pageNameKey={'pageName'}
                            pageLogo={kegkumImg}
                            pageLogoBg={'#095d78'}
                            pageTitleColor={"#095d78"}
                            titleKey={'title'}
                >

                    <Trans i18nKey='subTitle' t={t} components={{
                        vstack: <VStack alignItems={'center'}/>,
                        text: <Text position={`relative`}
                                    color={'#095d78'}
                                    fontSize={{base: '2xl', sm: 'xl', md: '3xl'}}/>,
                        bold: <strong/>,
                    }}>
                    </Trans>
                </TitlePanel>

                <SplitPanel t={t} isInvert={true} headingTextKey={'KombuOffer'}
                            textElement={
                                <Center>
                                    <VStack w={'95%'} h='100%' textAlign={'justify'}>
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
                                            <Stack
                                                direction={{base: 'column', md: 'row'}}
                                                spacing={{base: '2', lg: '4'}}
                                                justify={'center'}
                                                w={'100%'}
                                                h={'100%'}
                                            >
                                                <Box flex="1">
                                                    <Box backgroundColor={'blue.50'} color={'black'} h={'100%'} padding={'2vw'}>
                                                        <Trans i18nKey='KombuOfferContent1' t={t}
                                                               components={{
                                                                   text: <Text/>,
                                                                   li: <li/>,
                                                                   a: <Link color={PRIMARY_COLOR} target={'_blank'} href={'https://gutsykombucha.com/'}/>
                                                               }}>
                                                        </Trans>
                                                    </Box>
                                                </Box>

                                                <Box flex="1">
                                                    <Box backgroundColor={'blue.50'} color={'black'} h={'100%'} padding={'2vw'}>

                                                        <Trans i18nKey='KombuOfferContent2' t={t} h="full"
                                                               components={{
                                                                   text: <Text/>,
                                                                   li: <li/>,
                                                               }}>
                                                        </Trans>

                                                    </Box>
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
                                </Center>
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