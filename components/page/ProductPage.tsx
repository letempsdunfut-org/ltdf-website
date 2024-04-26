import {Trans, useTranslation} from "next-i18next";
import React from "react";
import SimplePage from "../shared/SimplePage";
import imgCouverture from "../../public/images/couverture/drafts-bw.jpg";
import Image from "next/image";
import iconTireuse from "../../public/images/icons/tireuse-transp.png";
import draftPics from "../../public/images/tireurse.png";
import {
    Box, Button, ComponentWithAs,
    List, ListIcon, ListItem, Text,
    VStack
} from "@chakra-ui/react";
import {ArrowForwardIcon, IconProps} from "@chakra-ui/icons";
import LinkComponent from "../shared/LinkComponent";
import kegPics from "../../public/images/kegator.png";
import SplitImageTextPanel from "../shared/SplitImageTextPanel";
import SimpleAccordion from "../shared/SimpleAccordion";
import {Namespace, TFunction} from "i18next";
import Head from "next/head";
import TitlePanel from "../shared/TitlePanel";
import Layout from "../shared/layout";

export type PriceItemComponentProps = {
    t: TFunction<Namespace<string>, string>
    itemContentKey: string
    icon?: ComponentWithAs<'svg', IconProps>

}

export function PriceItemComponent({t, itemContentKey, icon}: PriceItemComponentProps) {
    return (
        <Trans i18nKey={itemContentKey} t={t}
               components={{
                   cr: <br/>,
                   text: <Text as={'cite'}/>,
                   box: <Box fontSize={'xs'}/>,
                   list: <List w={'100%'} h={'100%'} spacing={3}
                               mb={5}/>,
                   listItem: <ListItem/>,
                   listIcon: <ListIcon as={icon}
                                       color='#FF893B'/>
               }}>
        </Trans>
    )
}

export type ListFromTranslationComponentProps = {
    t: TFunction<Namespace<string>, string>
    listContentKey: string
    icon?: ComponentWithAs<'svg', IconProps>
}

export function ListFromTranslationComponent({t, listContentKey, icon}: ListFromTranslationComponentProps) {
    return (
        <List spacing={3}>
            <Trans i18nKey={listContentKey} t={t}
                   components={{
                       listItem: <ListItem/>,
                       listIcon: <ListIcon as={icon}
                                           color='#FF893B'/>
                   }}>
            </Trans>
        </List>
    )
}

export default function ProductPage() {
    const {t} = useTranslation(['product', 'common']);

    const pageTitle = {
        bgImage: imgCouverture,
        bgImageAlt: 'common:title',
        titleColor: '#095d78',
        titleKey: 'common:product',
        children: <Image
            src={iconTireuse}
            alt={t('common:title')}
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
    }

    return (
        <Layout>
            <Head>
                <title>{t('pageTitle')}</title>
            </Head>
            <TitlePanel t={t}
                        pageNameKey={'pageTitle'}
                        pageTitleColor={pageTitle.titleColor}
                        bgImage={pageTitle.bgImage}
                        bgImageAlt={pageTitle.bgImageAlt}
                        titleKey={pageTitle.titleKey}
            >
                {pageTitle.children}
            </TitlePanel>


            <SplitImageTextPanel key={1} t={t}
                                 isInvert={true}
                                 headingTextKey={'dailyRental'}
                                 isImageLeft={true}
                                 textElement={
                                     <VStack w='100%' as={Box} paddingTop={'20px'} marginBottom={'10px'}>
                                         <SimpleAccordion t={t} items={[
                                             {
                                                 titleKey: 'draftTechnicalTilte',
                                                 itemContent: <ListFromTranslationComponent t={t}
                                                                                            icon={ArrowForwardIcon}
                                                                                            listContentKey={'draftTechnicalList'}/>
                                             },
                                             {
                                                 titleKey: 'draftMaintainTitle',
                                                 itemContent: <Text>{t('draftMaintainInfo')}</Text>
                                             },
                                             {
                                                 titleKey: 'draftDelivryTitle',
                                                 itemContent: <Text>{t('draftDelivryInfo')}</Text>
                                             },
                                             {
                                                 titleKey: 'draftServiceTitle',
                                                 itemContent: <Text>{t('draftServiceInfo')}</Text>
                                             },
                                             {
                                                 titleKey: 'draftPriceTitle',
                                                 itemContent: <PriceItemComponent t={t} icon={ArrowForwardIcon}
                                                                                  itemContentKey={'draftPricePanel'}/>
                                             },
                                         ]}/>
                                         <LinkComponent href='/rentalDaily' paddingTop={5}
                                                        _hover={{textDecoration: 'none'}}>
                                             <Button
                                                 backgroundColor={'white'}
                                                 color='#095d78'>{t('redirectDaily')}</Button>
                                         </LinkComponent>
                                     </VStack>
                                 }
                                 imageSrc={draftPics}
                                 imageAltKey={'common:title'}
            />,
            <SplitImageTextPanel key={2} t={t}
                                 isInvert={false}
                                 headingTextKey={'monthlyRental'}
                                 isImageLeft={false}
                                 imageSrc={kegPics}
                                 imageAltKey={'common:title'}
                                 textElement={
                                     <VStack w='100%'>
                                         <SimpleAccordion t={t} items={[
                                             {
                                                 titleKey: 'draftTechnicalTilte',
                                                 itemContent: <ListFromTranslationComponent t={t}
                                                                                            icon={ArrowForwardIcon}
                                                                                            listContentKey={'draftTechnicalList'}/>
                                             },
                                             {
                                                 titleKey: 'draftMaintainTitle',
                                                 itemContent: <Text>{t('draftMaintainInfo')}</Text>
                                             },
                                             {
                                                 titleKey: 'draftDelivryTitle',
                                                 itemContent: <Text>{t('draftDelivryInfo')}</Text>
                                             },
                                             {
                                                 titleKey: 'draftServiceTitle',
                                                 itemContent: <Text>{t('draftServiceInfo')}</Text>
                                             },
                                             {
                                                 titleKey: 'draftPriceTitle',
                                                 itemContent: <PriceItemComponent t={t} icon={ArrowForwardIcon}
                                                                                  itemContentKey={'draftPricePanel'}/>
                                             },
                                         ]}/>
                                         <LinkComponent paddingTop={5} href='/rentalDaily'
                                                        _hover={{textDecoration: 'none'}} >
                                             <Button
                                                 backgroundColor={'#095d78'}
                                                 color='white'>{t('redirectMonthly')}</Button>
                                         </LinkComponent>
                                     </VStack>
                                 }
            />
        </Layout>
    )
}