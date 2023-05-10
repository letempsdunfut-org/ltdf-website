import Head from 'next/head'
import Layout from '../../components/layout'
import {
    Box,
    Center,
    Heading,
    HStack,
    Text,
    Container,
    Stack,
    Button,
    ListIcon,
    Wrap,
    WrapItem,
    VStack,
    ListItem,
    List
} from '@chakra-ui/react'
import {AddIcon, CheckIcon} from '@chakra-ui/icons'
import {getStaticPaths, makeStaticProps} from '../../lib/getStatic'
import {Trans, useTranslation} from 'next-i18next'
import LinkComponent from '../../components/LinkComponent '
import Image from 'next/image'
import logoLtdf from '../../public/images/logoLtdfWhite.svg'
import imgCouverture from '../../public/images/couverture/bartender.jpg'
import imgLocation from '../../public/images/ltdf/tireuse-noel.jpg'
import coco from '../../public/images/team/coco.png'
import greg from '../../public/images/team/greg.png'
import arthur from '../../public/images/team/arthur.jpg'
import iconBeer from '../../public/images/icons/degustation-transp.png'
import iconTireuse from '../../public/images/icons/tireuse-transp.png'
import iconFut from '../../public/images/icons/futs-transp.png'
import iconPromo from '../../public/images/icons/promotions-transp.png'

const getStaticProps = makeStaticProps(['home', 'common']);
export {getStaticPaths, getStaticProps};

export default function Home() {
    const {t} = useTranslation(['home', 'common']);
    const name = t('common:title');
    const Links = [
        {name: t('common:rental'), path: '/rental'},
        {name: t('common:product'), path: '/product'},
        {name: t('common:professional'), path: '/professional'},
        {name: t('common:monthly'), path: '/monthly'}
    ];

    const magicRatio = ['95%', '95%', '90%', '80%', '70%', '60%'];
    return (
        <>
            <Layout>
                <Head>
                    <title>{name}</title>
                </Head>
                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"}>
                    <Image
                        src={imgCouverture}
                        alt={name}
                        loading="lazy"
                        fill={true}
                        style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray'}}
                    />
                    <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>
                        <VStack spacing={5} alignItems={'center'} h={"fit"}>
                            <Box boxSize={'26vh'} paddingTop={5}>
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
                            <Box>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'}>
                                    <Wrap spacing={4}>
                                        {Links.map((link) => (
                                            <WrapItem key={link.name}>
                                                <LinkComponent key={link.name} href={link.path}
                                                               _hover={{textDecoration: 'none'}}><Button key={link.name}
                                                                                                         backgroundColor={'#095d78'}
                                                                                                         color='white'>{link.name}</Button></LinkComponent>
                                            </WrapItem>
                                        ))}
                                    </Wrap>
                                </Stack>
                            </Box>
                            <Box minH={'calc(10vh)'}>
                                <Image
                                    width={75}
                                    src={iconBeer}
                                    alt={name}
                                    loading="lazy"
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '50%',
                                        margin: 'auto',
                                    }}
                                />
                            </Box>
                        </VStack>

                    </Center>


                </Container>

                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}
                           backgroundColor={'#095d78'} color={'white'}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                           maxHeight='max'>
                        <Box w='50%' h='100%'>
                            <Center>
                                <Box boxSize={'60vh'} overflow={'hidden'}>
                                    <Image
                                        src={imgLocation}
                                        alt={name}
                                        loading="lazy"
                                        sizes='(max-width: 50vh)'
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
                                    <VStack w='100%' h='100%'>
                                        <Box>
                                            <Heading as='h3' fontWeight={600}
                                                     fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                                                     lineHeight={'110%'}>
                                                {t('rentalSubTitle')}
                                            </Heading>
                                        </Box>
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
                                    <Center>
                                        <LinkComponent href='/rental' _hover={{textDecoration: 'none'}}><Button
                                            backgroundColor={'white'}
                                            color='#095d78'>{t('moreinfo')}</Button></LinkComponent>
                                    </Center>
                                </Box>

                            </Stack>

                        </Box>
                    </Stack>
                </Container>
                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
                    <VStack spacing={2} alignItems={'center'} minHeight={'calc(80vh)'}
                            maxHeight='max'>
                        <Box w='100%' h='50%'>
                            <Center>
                                <HStack spacing={3} alignItems={'center'}>
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
                                </HStack>
                            </Center>
                        </Box>
                        <Box h='40%' w='100%' ml={20} margin={'auto'}>
                            <VStack spacing={8} alignItems={'center'}>
                                <Box>
                                    <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                             lineHeight={'110%'} textAlign='center'>
                                        {t('common:product')}
                                    </Heading>
                                </Box>
                                <Box>
                                    <Center>
                                        <List spacing={3} w={magicRatio} h='100%'>
                                            <ListItem textAlign={"justify"}>
                                                <ListIcon as={CheckIcon} color='#FF893B'/>
                                                <Trans i18nKey='productDraft' t={t}
                                                       components={{text: <Text/>, bold: <strong/>}}>
                                                </Trans>
                                            </ListItem>
                                        </List>
                                    </Center>
                                </Box>
                                <Box padding={5}>
                                    <LinkComponent  href='/product' _hover={{textDecoration: 'none'}}><Button
                                        backgroundColor={'#095d78'}
                                        color='white'>{t('moreinfo')}</Button></LinkComponent>
                                </Box>
                            </VStack>
                        </Box>

                    </VStack>

                </Container>

                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}
                           backgroundColor={'#095d78'} color={'white'}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                           maxHeight='max'>
                        <Box w='49%' h='100%'>
                            <Center>
                                <VStack spacing={{base: 4, md: 8}}>
                                    <HStack spacing={{base: 4, md: 8}}>
                                        <Box boxSize={'25vh'}>
                                            <Image
                                                src={greg}
                                                alt={name}
                                                loading="lazy"
                                            />
                                        </Box>
                                        <Box boxSize={'25vh'}>

                                            <Image
                                                src={arthur}
                                                alt={name}
                                                loading="lazy"
                                            />
                                        </Box>
                                    </HStack>
                                    <Box boxSize={'25vh'}>
                                        <Image
                                            src={coco}
                                            alt={name}
                                            loading="lazy"
                                        />
                                    </Box>
                                </VStack>
                            </Center>

                        </Box>
                        <Box w='100%' h='100%'>
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
                </Container>
            </Layout>
        </>

    )
}

