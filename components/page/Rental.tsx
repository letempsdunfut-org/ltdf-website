import Head from 'next/head'
import {
    Box,
    Text,
    Button,
    VStack,
    List,
    ListIcon,
    ListItem,
} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import {Trans, useTranslation} from 'next-i18next'
import imgCouverture from "../../public/images/couverture/private-party-cover.jpg";
import React from "react";
import Layout from '../shared/layout';
import LinkComponent from "../shared/LinkComponent";
import TitlePanel from "../shared/TitlePanel";
import draftPics from '../../public/images/tireurse.png'
import FullPanel from "../shared/FullPanel";

export default function Rental() {
    const {t} = useTranslation(['dailyRental', 'common']);
    
    return (
        <>
            <Layout>
                <Head>
                    <title>{t('dailyRental:pageTitle')}</title>
                </Head>

                <TitlePanel t={t}
                            bgImage={imgCouverture}
                            bgImageAlt={'common:title'}
                            pageNameKey={"dailyRental:pageTitle"}
                            pageLogo={draftPics}
                            pageLogoBg={'#095d78'}
                            pageTitleColor={"#095d78"}
                            titleKey={"common:rentalDaily"}
                >

                    <Trans i18nKey='subTitle' t={t} components={{
                        vstack: <VStack alignItems={'center'}/>,
                        text: <Text position={'relative'} color={'#095d78'}
                                    fontSize={{base: '2xl', sm: 'xl', md: '3xl'}}/>,
                        bold: <strong/>,
                    }}>
                    </Trans>
                </TitlePanel>
                <FullPanel t={t} isInvert={true} headingTextKey={'retntalDraftTitle'}>
                    <VStack textAlign={'justify'}>
                        <Text w='100%' textAlign={"justify"} as={'cite'}>
                            <strong>{t('deliveryCta')}</strong>
                        </Text>

                        <Trans i18nKey='retntalDraftText' t={t}
                               components={{
                                   text: <Text w={'100%'}/>,
                                   bold: <strong/>
                               }}>
                        </Trans>
                        <Trans i18nKey={'retntalDraftTextPros'} t={t}
                               components={{
                                   text: <Text w={'100%'} paddingTop={5}/>,
                                   bold: <strong/>
                               }}>
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

                        <LinkComponent paddingTop={5} href='/booking' _hover={{textDecoration: 'none'}}><Button
                            backgroundColor={'white'} color='#095d78'>{t('book')}</Button>
                        </LinkComponent>
                    </VStack>
                </FullPanel>

                <FullPanel t={t} isInvert={false} headingTextKey={'rentalEventTitle'}>
                    <VStack textAlign={'justify'}>
                        <Trans i18nKey='rentalEventText' t={t}
                               components={{text: <Text/>, bold: <strong/>}}>
                        </Trans>

                        <LinkComponent href='/booking' _hover={{textDecoration: 'none'}}>
                            <Button>{t('book')}</Button>
                        </LinkComponent>
                    </VStack>
                </FullPanel>
            </Layout>
        </>

    )
}

