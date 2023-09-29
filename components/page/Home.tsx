import {Trans, useTranslation} from "next-i18next";
import {usePagesLinks} from "../../lib/pagesLinks";
import Layout from "../shared/layout";
import Head from "next/head";
import Panel from "../shared/Panel";
import imgCouverture from "../../public/images/couverture/bartender.jpg";
import {Box, Button, Center, Heading, HStack, List, ListIcon, ListItem, Stack, Text, VStack} from "@chakra-ui/react";
import Image from "next/image";
import logoLtdf from "../../public/images/logoLtdfWhite.svg";
import imgLocation from "../../public/images/ltdf/tireuse-noel.jpg";
import {AddIcon, CheckIcon} from "@chakra-ui/icons";
import iconBeer from "../../public/images/icons/degustation-transp.png";
import iconTireuse from "../../public/images/icons/tireuse-transp.png";
import iconFut from "../../public/images/icons/futs-transp.png";
import iconPromo from "../../public/images/icons/promotions-transp.png";
import greg from "../../public/images/team/greg.png";
import arthur from "../../public/images/team/arthur.jpg";
import coco from "../../public/images/team/coco.png";
import LinkComponent from "../shared/LinkComponent";

export default function Home() {
    const {t} = useTranslation(['home', 'common']);
    const name = t('common:title');
    const links = usePagesLinks()

    const magicRatio = ['95%', '95%', '90%', '80%', '70%', '60%'];
    const magicImageRatioVw = ['60vw', '30vh', '30vw', '25vw', '15vw', '15vw'];

    return (
        <>
            <Layout>
                <Head>
                    <title>{name}</title>
                </Head>
                <Panel isInvert={false} imageData={imgCouverture} imageAltName={name}>
                    <Center w='100%' h='80vh'>
                        <VStack spacing={5}>
                            <Box boxSize={magicImageRatioVw} paddingTop={5}>
                                <Image
                                    src={logoLtdf}
                                    alt={name}
                                    loading="lazy"
                                    style={{position: 'relative', backgroundColor: 'black', borderRadius: '50%'}}
                                />
                            </Box>
                            <Box>
                                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center' position={'relative'}
                                         textTransform={'uppercase'}
                                         margin={'44px'}
                                         color={'white'}>
                                    {name}
                                </Heading>
                            </Box>
                            <Box marginBottom={'10px'}>
                                <Stack direction={["column", "row"]} alignItems={'center'}>
                                    {links.map((link) => (
                                        <LinkComponent key={link.name} href={link.path}
                                                       _hover={{textDecoration: 'none'}}><Button key={link.name}
                                                                                                 backgroundColor={'#095d78'}
                                                                                                 color='white'>{link.name}</Button></LinkComponent>
                                    ))}
                                </Stack>
                            </Box>
                        </VStack>

                    </Center>

                </Panel>

                <Panel isInvert={true}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'80vh'}
                           maxHeight='max'>
                        <Box w='50vw' h='100%'>
                            <Center>
                                <Box boxSize={'40vw'} overflow={'hidden'}>
                                    <Image
                                        src={imgLocation}
                                        alt={name}
                                        loading="lazy"
                                        sizes='(max-width: 30vw)'
                                        style={{filter: 'grayscale(100%)'}}
                                    />
                                </Box>
                            </Center>
                        </Box>
                        <Box w='100%' h='100%'>
                            <Stack alignItems={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                                <Box>
                                    <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('common:rental')}
                                    </Heading>
                                </Box>
                                <Box>
                                    <VStack w='100%' h='100%' textAlign={'justify'}>
                                        <Heading as='h3' fontWeight={600}
                                                 fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                                                 lineHeight={'110%'}>
                                            {t('rentalSubTitle')}
                                        </Heading>
                                        <Box>
                                            <Center>
                                                <List spacing={3} w={magicRatio}
                                                      h='100%'>
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
                                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'}>
                                        <Text marginRight={5}>{t('moreinfo')}</Text>

                                        <LinkComponent href='/rentalDaily' _hover={{textDecoration: 'none'}}><Button
                                            backgroundColor={'white'}
                                            color='#095d78'>{t('moreinfoDaily')}</Button></LinkComponent>

                                        <LinkComponent href='/rentalMonthly' _hover={{textDecoration: 'none'}}><Button
                                            backgroundColor={'white'}
                                            color='#095d78'>{t('moreinfoMonthly')}</Button></LinkComponent>
                                    </Stack>

                                </Box>

                            </Stack>

                        </Box>
                    </Stack>
                </Panel>

                <Panel isInvert={false}>
                    <VStack spacing={2} alignItems={'center'} minW={'80vw'} minH={'80vh'}>
                        <Stack direction={['column', 'row']} spacing={3} alignItems={'center'}>
                            <Box maxH={200} maxW={200}>
                                <Image
                                    src={iconBeer}
                                    alt={name}
                                    loading="lazy"
                                />
                            </Box>
                            <Box maxH={200} maxW={200}>
                                <Image
                                    src={iconTireuse}
                                    alt={name}
                                    loading="lazy"
                                />
                            </Box>
                            <Box maxH={200} maxW={200}>
                                <Image
                                    src={iconFut}
                                    alt={name}
                                    loading="lazy"
                                />
                            </Box>
                            <Box maxH={200} maxW={200}>
                                <Image
                                    src={iconPromo}
                                    alt={name}
                                    loading="lazy"
                                />
                            </Box>
                        </Stack>

                        <Stack alignItems={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                            <Box>
                                <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                         lineHeight={'110%'} textAlign='center'>
                                    {t('common:product')}
                                </Heading>
                            </Box>
                            <Box >
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
                                    backgroundColor={'#095d78'}
                                    color='white'>{t('moreinfo')}</Button></LinkComponent>
                            </Box>
                        </Stack>

                    </VStack>

                </Panel>

                <Panel isInvert={true}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'80vh'}
                           maxHeight='max' maxW={'100vw'}>
                        <Box minW='40vw' h='100%'>
                            <Center>
                                <VStack spacing={{base: 4, md: 8}}>
                                    <HStack spacing={{base: 4, md: 8}}>
                                        <Box boxSize={'15vw'}>
                                            <Image
                                                src={greg}
                                                alt={name}
                                                loading="lazy"
                                            />
                                        </Box>
                                        <Box boxSize={'15vw'}>

                                            <Image
                                                src={arthur}
                                                alt={name}
                                                loading="lazy"
                                            />
                                        </Box>
                                    </HStack>
                                    <Box boxSize={'15vw'}>
                                        <Image
                                            src={coco}
                                            alt={name}
                                            loading="lazy"
                                        />
                                    </Box>
                                </VStack>
                            </Center>

                        </Box>
                        <Box minW='40vw' h='100%'>
                            <Center>
                                <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                                    <Box>
                                        <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                                 lineHeight={'110%'} textAlign='center'>
                                            {t('storyTitle')}
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Center>
                                            <VStack spacing={6} textAlign={'justify'} w={magicRatio}>
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
                            </Center>
                        </Box>
                    </Stack>
                </Panel>
            </Layout>
        </>

    )
}