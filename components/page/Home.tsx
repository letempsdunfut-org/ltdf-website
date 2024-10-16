import {Trans, useTranslation} from "next-i18next";
import {usePagesLinks} from "../../lib/pagesLinks";
import Layout from "../shared/layout";
import Head from "next/head";
import imgCouverture from "../../public/images/couverture/bartender.jpg";
import {
    Box,
    Button,
    Center,
    Container, Flex,
    Heading,
    HStack,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    VStack, Wrap, WrapItem
} from "@chakra-ui/react";
import Image from "next/image";
import logoLtdf from "../../public/images/logoLtdfWhite.svg";
import imgLocation from "../../public/images/ltdf/tirieuse-location.jpg";
import {AddIcon, CheckIcon} from "@chakra-ui/icons";
import iconBeer from "../../public/images/icons/degustation-transp.png";
import iconTireuse from "../../public/images/icons/tireuse-transp.png";
import iconFut from "../../public/images/icons/futs-transp.png";
import iconPromo from "../../public/images/icons/promotions-transp.png";
import greg from "../../public/images/team/greg.png";
import arthur from "../../public/images/team/arthur.jpg";
import coco from "../../public/images/team/coco.png";
import LinkComponent from "../shared/LinkComponent";
import TitlePanel from "../shared/TitlePanel";
import React from "react";
import SplitImageTextPanel from "../shared/SplitImageTextPanel";
import FullPanel from "../shared/FullPanel";
import {ACCENT_COLOR, MAGIC_RATIO, PRIMARY_COLOR} from "../shared/utils";

export default function Home() {
    const {t} = useTranslation(['home', 'common']);
    const name = t('common:title');

    return (
        <>
            <Layout>
                <Head>
                    <title>{name}</title>
                </Head>

                <TitlePanel t={t}
                            bgImage={imgCouverture}
                            bgImageAlt={'pageName'}
                            pageNameKey={'pageName'}
                            pageLogo={logoLtdf}
                            pageLogoBg={PRIMARY_COLOR}
                            pageTitleColor={PRIMARY_COLOR}
                            titleKey={name}
                />

                <SplitImageTextPanel t={t} isInvert={true}
                                     textElement={
                                         <Center h={'100%'} padding={3}>
                                             <VStack textAlign={"justify"}>
                                                 <Box>
                                                     <Heading as='h2' fontWeight={600}
                                                              fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                                              lineHeight={'110%'} textAlign='center'>
                                                         {t('common:rental')}
                                                     </Heading>
                                                 </Box>
                                                 <Box>
                                                     <VStack w='100%' h='100%' textAlign={'justify'} spacing={2}>
                                                         <Heading as='h3' fontWeight={600}
                                                                  fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                                                                  lineHeight={'110%'}>
                                                             {t('rentalSubTitle')}
                                                         </Heading>
                                                         <Box w='100%'>
                                                             <Center w='100%'>
                                                                 <List spacing={3}>
                                                                     <ListItem textAlign={'justify'}>
                                                                         <ListIcon as={AddIcon} color='#FF893B'/>
                                                                         <Trans i18nKey='rentalDraft' t={t}
                                                                                components={{
                                                                                    cite: <Text as={'cite'}/>,
                                                                                    bold: <strong/>
                                                                                }}>
                                                                         </Trans>
                                                                     </ListItem>
                                                                     <ListItem textAlign={'justify'}>
                                                                         <ListIcon as={AddIcon} color='#FF893B'/>
                                                                         <Trans i18nKey='rentalLicence' t={t}
                                                                                components={{
                                                                                    cite: <Text as={'cite'}/>,
                                                                                    bold: <strong/>
                                                                                }}>
                                                                         </Trans>
                                                                     </ListItem>
                                                                 </List>
                                                             </Center>
                                                         </Box>
                                                     </VStack>
                                                 </Box>
                                                 <Box>
                                                     <Stack direction={['column', 'row']} spacing={8}
                                                            alignItems={'center'}>
                                                         <LinkComponent href='/rental/daily'
                                                                        _hover={{textDecoration: 'none'}}><Button
                                                             backgroundColor={'white'}
                                                             color='#095d78'>{t('moreinfoDaily')}</Button></LinkComponent>

                                                         <LinkComponent href='/rental/monthly'
                                                                        _hover={{textDecoration: 'none'}}><Button
                                                             backgroundColor={'white'}
                                                             color='#095d78'>{t('moreinfoMonthly')}</Button></LinkComponent>
                                                     </Stack>

                                                 </Box>
                                             </VStack>
                                         </Center>
                                     }
                                     isImageLeft={true}
                                     imageSrc={imgLocation}
                                     imageAltKey={name}
                                     imageStyle={{
                                         filter: 'grayscale(100%)',
                                         objectFit: 'contain',
                                         height: '80%',
                                         width: '80%'
                                     }}
                />

                <FullPanel t={t} isInvert={false}>
                    <Stack direction={{base: 'column', md: 'column'}} h={'100%'}>
                        <Box>
                            <Center h={'100%'}>
                                <Wrap spacing="16" align='center' justify={"center"}>
                                    <WrapItem boxSize={'200'}>
                                        <Image
                                            src={iconBeer}
                                            alt={name}
                                            loading="lazy"
                                        />
                                    </WrapItem>
                                    <WrapItem boxSize={'200'}>
                                        <Image
                                            src={iconTireuse}
                                            alt={name}
                                            loading="lazy"
                                        />
                                    </WrapItem>
                                    <WrapItem boxSize={'200'}>
                                        <Image
                                            src={iconFut}
                                            alt={name}
                                            loading="lazy"
                                        />
                                    </WrapItem>
                                    <WrapItem boxSize={'200'}>
                                        <Image
                                            src={iconPromo}
                                            alt={name}
                                            loading="lazy"
                                        />
                                    </WrapItem>
                                </Wrap>
                            </Center>
                        </Box>

                        <Box>
                            <Center h={'100%'}>
                                <VStack textAlign={"justify"} w={MAGIC_RATIO} padding={2}>
                                    <Box>
                                        <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                                 lineHeight={'110%'} textAlign='center'>
                                            {t('common:product')}
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <List spacing={3}>
                                            <ListItem textAlign={"justify"}>
                                                <ListIcon as={CheckIcon} color='#FF893B'/>
                                                <Trans i18nKey='productDraft' t={t}
                                                       components={{text: <Text/>, bold: <strong/>}}>
                                                </Trans>
                                            </ListItem>
                                        </List>
                                    </Box>
                                    <Box padding={5}>
                                        <LinkComponent href='/product' _hover={{textDecoration: 'none'}}><Button
                                            backgroundColor={PRIMARY_COLOR}
                                            color={ACCENT_COLOR}>{t('moreinfo')}</Button></LinkComponent>
                                    </Box>
                                </VStack>

                            </Center>
                        </Box>
                    </Stack>
                </FullPanel>

                <FullPanel t={t} isInvert={true} headingTextKey={'storyTitle'}>
                    <Stack direction={{base: 'column', md: 'column'}} h={'100%'}>
                        <Box>
                            <Center h={'100%'}>
                                <Wrap spacing="16" align='center' justify={"center"}>
                                    <WrapItem boxSize={'300'}>
                                        <Image
                                            src={greg}
                                            alt={name}
                                            loading="lazy"
                                            style={{filter: "grayscale(1)"}}

                                        />
                                    </WrapItem>
                                    <WrapItem boxSize={'300'}>
                                        <Image
                                            src={arthur}
                                            alt={name}
                                            loading="lazy"
                                            style={{filter: "grayscale(1)"}}

                                        />
                                    </WrapItem>
                                    <WrapItem boxSize={'300'}>
                                        <Image
                                            src={coco}
                                            alt={name}
                                            loading="lazy"
                                            style={{filter: "grayscale(1)"}}

                                        />
                                    </WrapItem>
                                </Wrap>
                            </Center>
                        </Box>

                        <Box>
                            <Center h={'100%'}>
                                <VStack textAlign={"justify"} w={MAGIC_RATIO} padding={2}>
                                    <Trans i18nKey='history' t={t}
                                           components={{
                                               text: <Text/>,
                                               bold: <strong/>,
                                               box: <Box verticalAlign='middle' fontWeight='normal' px='5'
                                                         lineHeight='tall' position='relative' color='white'
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
                                </VStack>

                            </Center>
                        </Box>
                    </Stack>
                </FullPanel>

            </Layout>
        </>

    )
}