import {Trans, useTranslation} from "next-i18next";
import Layout from "../shared/layout";
import Head from "next/head";
import {Box, Button, Center, Container, Heading, Stack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import imgCouverture from "../../public/images/couverture/party-cover.jpg";
import iconFut from "../../public/images/icons/futs-transp.png";
import TitlePanel from "../shared/TitlePanel";
import {PRIMARY_COLOR} from "../shared/utils";
import FullPanel from "../shared/FullPanel";

export default function Professional() {
    const {t} = useTranslation(['professional', 'common']);
    const name = t('common:professional');
    const magicRatio = ['95%', '85%', '80%', '70%', '60%', '50%'];

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('professional:pageTitle')}</title>
                </Head>
                <TitlePanel t={t} pageNameKey={name} pageTitleColor={PRIMARY_COLOR} titleKey={name}
                            bgImage={imgCouverture} bgImageAlt={name} pageLogo={iconFut}/>

                <FullPanel t={t} isInvert={true} headingTextKey={"microTitle"}>
                    <Stack as={Box} align={'center'} w={magicRatio} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
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
                </FullPanel>

                <FullPanel t={t} isInvert={false} headingTextKey={"companyTitle"}>
                    <Stack as={Box} align={'center'} w={magicRatio} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
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
                    </Stack>
                </FullPanel>
            </Layout>
        </>
    )
}