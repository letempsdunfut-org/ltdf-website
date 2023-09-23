import {Trans, useTranslation} from "next-i18next";
import {usePagesLinks} from "../../lib/pagesLinks";
import Layout from "../shared/layout";
import Head from "next/head";
import Panel from "../shared/Panel";
import {Box, Button, Center, Heading, List, ListIcon, ListItem, Stack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import kegkumImg from "../../public/images/kegkumLight.png";
import LinkComponent from "../shared/LinkComponent";
import imgLocation from "../../public/images/ltdf/tireuse-noel.jpg";
import {AddIcon} from "@chakra-ui/icons";
import React from "react";


export default function MonthlyRental() {
    const {t} = useTranslation(['monthlyRental', 'common']);

    const magicImageRatioVw = ['80vw', '60vw', '60vw', '40vw', '30vw', '30vw'];

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('monthlyRental:pageName')}</title>
                </Head>
                <Panel isInvert={false}>
                    <VStack spacing={5}>
                        <Box boxSize={magicImageRatioVw} paddingTop={5}>
                            <Image
                                src={kegkumImg}
                                alt={t('monthlyRental:pageName')}
                                loading="lazy"
                                style={{position: 'relative', backgroundColor: '#095d78', borderRadius: '50%'}}
                            />
                        </Box>
                        <Box>
                            <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                     lineHeight={'110%'} textAlign='center' position={'relative'}
                                     textTransform={'uppercase'}
                                     margin={'44px'}>
                                {t('monthlyRental:title')}
                            </Heading>
                        </Box>
                        <Box marginBottom={'10px'}>
                            <Trans i18nKey='subTitle' t={t}
                                   components={{
                                       vstack: <VStack alignItems={'center'}/>,
                                       text: <Text fontSize={{base: '2xl', sm: 'xl', md: '3xl'}}/>,
                                       bold: <strong/>,
                                   }}>
                            </Trans>
                        </Box>
                    </VStack>
                </Panel>

                <Panel isInvert={true}>
                    <Center textAlign={'justify'}>
                        <VStack direction={['row']} spacing={8} padding={8} alignItems={'center'}
                                minHeight={'calc(80vh)'}
                                maxHeight='max' w={'60%'}>
                            <Box>
                                <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center'>
                                    {t('KombuOffer')}
                                </Heading>
                            </Box>

                            <Box>
                                <VStack>
                                    <Trans i18nKey='KombuOfferExplain' t={t}
                                           components={{
                                               text: <Text/>,
                                           }}>
                                    </Trans>
                                </VStack>
                            </Box>
                            <Box>
                                <Trans i18nKey='KombuOfferPitch' t={t}
                                       components={{
                                           text: <Text/>,
                                       }}>
                                </Trans>

                            </Box>
                            <Box backgroundColor={'gray.50'} color={'black'}>
                                <Box margin={'2vw'}>
                                    <Trans i18nKey='KombuOfferContent' t={t}
                                           components={{
                                               text: <Text/>,
                                               li: <li/>,
                                           }}>
                                    </Trans>
                                </Box>
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

                </Panel>
            </Layout>
        </>

    )
}