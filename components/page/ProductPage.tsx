import {Trans, useTranslation} from "next-i18next";
import React from "react";
import imgCouverture from "../../public/images/couverture/drafts-bw.jpg";
import iconTireuse from "../../public/images/icons/tireuse-transp.png";
import draftPics from "../../public/images/tireurse.png";
import {
    Box, Button, Center, ComponentWithAs,
    List, ListIcon, ListItem, Stack, Text
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
        titleKey: 'common:product'
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
                        pageLogo={iconTireuse}
            />


            <SplitImageTextPanel key={1} t={t}
                                 isInvert={true}
                                 headingTextKey={'dailyRental'}
                                 isImageLeft={true}
                                 textElement={
                                     <Center h={'100%'} w={'100%'}>
                                         <Stack direction={{base: 'column', md: 'column'}} h={'100%'} w={'100%'}>
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
                                             <Center>
                                                 <LinkComponent href='/rental/daily' paddingTop={5}
                                                                _hover={{textDecoration: 'none'}}>
                                                     <Button
                                                         backgroundColor={'white'}
                                                         color='#095d78'>{t('redirectDaily')}</Button>
                                                 </LinkComponent>
                                             </Center>
                                         </Stack>
                                     </Center>
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
                                 imageStyle={{
                                     objectFit: 'contain',
                                     height: '40%',
                                     width: '40%'
                                 }}
                                 textElement={
                                     <Center>
                                         <Stack direction={{base: 'column', md: 'column'}} h={'100%'} w={'100%'}>
                                             <SimpleAccordion t={t} items={[
                                                 {
                                                     titleKey: 'monthlyDraftTechnicalTilte',
                                                     itemContent: <ListFromTranslationComponent t={t}
                                                                                                icon={ArrowForwardIcon}
                                                                                                listContentKey={'monthlyDraftTechnicalList'}/>
                                                 },
                                                 {
                                                     titleKey: 'monthlyDraftMaintainTitle',
                                                     itemContent: <Text>{t('monthlyDraftMaintainInfo')}</Text>
                                                 },
                                                 {
                                                     titleKey: 'monthlyDraftDelivryTitle',
                                                     itemContent: <Text>{t('monthlyDraftDelivryInfo')}</Text>
                                                 },
                                                 {
                                                     titleKey: 'monthlyDraftServiceTitle',
                                                     itemContent: <Text>{t('monthlyDraftServiceInfo')}</Text>
                                                 },
                                                 {
                                                     titleKey: 'monthlyDraftPriceTitle',
                                                     itemContent: <PriceItemComponent t={t} icon={ArrowForwardIcon}
                                                                                      itemContentKey={'monthlyDraftPricePanel'}/>
                                                 },
                                             ]}/>
                                             <Center>
                                                 <LinkComponent paddingTop={5} href='/rental/monthly'
                                                                _hover={{textDecoration: 'none'}}>
                                                     <Button
                                                         backgroundColor={'#095d78'}
                                                         color='white'>{t('redirectMonthly')}</Button>
                                                 </LinkComponent>
                                             </Center>

                                         </Stack>

                                     </Center>
                                 }
            />
        </Layout>
    )
}