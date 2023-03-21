import Head from 'next/head'
import Layout from '../../../components/layout'
import {
    Box,
    Center,
    InputLeftElement,
    Flex,
    Checkbox,
    Heading,
    HStack,
    IconButton,
    Link,
    Spacer,
    Text,
    Image,
    Container,
    Stack,
    Button,
    ButtonGroup,
    Wrap,
    WrapItem,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Tabs, TabList, Tab, TabPanels, TabPanel, Card, CardBody, Divider, CardFooter
} from '@chakra-ui/react'
import {EmailIcon} from '@chakra-ui/icons'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {useTranslation} from 'next-i18next'
import CheckoutForm from "../../../components/CheckoutForm";

const getStaticProps = makeStaticProps(['booking', 'common']);
export {getStaticPaths, getStaticProps};

export default function Booking() {
    const {t} = useTranslation(['booking', 'common']);
    const name = t('common:title');

    return (
        <>
            <Layout>
                <Head>
                    <title>{t('booking:pageTitle')}</title>
                </Head>
                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
                    <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                           maxHeight='max'>
                        <Box w='100%' h='100%'>
                            <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                     lineHeight={'110%'} textAlign='center'>
                                {t("common:booking")}
                            </Heading>

                        </Box>
                    </Stack>
                </Container>
                <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}
                           backgroundColor={'#095d78'}>
                    <Tabs isFitted variant='enclosed'>
                        <TabList color={"white"}>
                            <Tab _selected={{color: 'white', bg: '#FF893B'}}>Reservation journaliere </Tab>
                            <Tab _selected={{color: 'white', bg: '#FF893B'}}>Abonement Mensuel</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'}
                                       minHeight={'calc(80vh)'}
                                       maxHeight='max'>
                                    <Box w='49%' h='100%' color={'white'}>
                                        <Center>
                                            <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}}
                                                   py={{base: 5, md: 10}}>
                                                <Heading as='h2' fontWeight={600}
                                                         fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                                         lineHeight={'110%'} textAlign='center'>
                                                    {t('booking:infoTitle')}
                                                </Heading>
                                                <Center>
                                                    <Text>
                                                        {t('booking:info')}
                                                    </Text>
                                                </Center>
                                            </Stack>
                                        </Center>
                                    </Box>
                                    <Box w='50%' h='100%'>
                                        <Center bg={'white'}>
                                            <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}}
                                                   py={{base: 5, md: 10}}>
                                                <Heading as='h2' fontWeight={600}
                                                         fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                                                         lineHeight={'110%'} textAlign='center'>
                                                    {t('booking:bookingTitle')}
                                                </Heading>
                                                <Flex>
                                                    <FormControl mr="5%">
                                                        <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                                                            {t('firstname')}
                                                        </FormLabel>
                                                        <Input id="first-name" placeholder={t('firstname')}
                                                               bg={'white'}/>
                                                    </FormControl>

                                                    <FormControl>
                                                        <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                                                            {t('lastname')}
                                                        </FormLabel>
                                                        <Input id="last-name" placeholder={t('lastname')} bg={'white'}/>
                                                    </FormControl>
                                                </Flex>
                                                <FormControl mt="2%">
                                                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                                                        {t('email')}
                                                    </FormLabel>
                                                    <InputGroup>
                                                        <InputLeftElement pointerEvents='none'>
                                                            <EmailIcon color='gray.300'/>
                                                        </InputLeftElement>
                                                        <Input id="email" type="email" bg={'white'}/>
                                                    </InputGroup>
                                                    <FormHelperText>{t('emailInfo')}</FormHelperText>
                                                </FormControl>
                                                <Flex>
                                                    <FormControl mr="5%">
                                                        <FormLabel htmlFor="startDate" fontWeight={'normal'} mt="2%">
                                                            {t('startDate')}
                                                        </FormLabel>
                                                        <Input
                                                            id='startDate'
                                                            placeholder={t('datePlaceholder')}
                                                            size="md"
                                                            type="datetime-local"
                                                            min={Date.now().toLocaleString()}
                                                            bg={'white'}
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <FormLabel htmlFor="endDate" fontWeight={'normal'} mt="2%">
                                                            {t('endDate')}
                                                        </FormLabel>
                                                        <Input
                                                            id='endDate'
                                                            placeholder={t('datePlaceholder')}
                                                            size="md"
                                                            type="datetime-local"
                                                            bg={'white'}
                                                        />
                                                    </FormControl>
                                                </Flex>
                                                <Flex>
                                                    <FormControl mr="5%">
                                                        <FormLabel htmlFor="qty" fontWeight={'normal'} mt="2%">
                                                            {t('qty')}
                                                        </FormLabel>
                                                        <Input
                                                            id='qty'
                                                            type={'number'}
                                                            max={3}
                                                            min={1}
                                                            bg={'white'}
                                                        />
                                                    </FormControl>
                                                    <FormControl>
                                                        <FormLabel htmlFor="co2" fontWeight={'normal'} mt="2%">
                                                            {t('options')}
                                                        </FormLabel>
                                                        <Checkbox id='co2' bg={'white'}>CO2 + 30$</Checkbox>
                                                    </FormControl>
                                                </Flex>
                                                <Button>{t('submit')}</Button>
                                                <CheckoutForm/>
                                            </Stack>
                                        </Center>
                                    </Box>
                                </Stack>
                            </TabPanel>
                            <TabPanel>
                                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'}
                                       minHeight={'calc(80vh)'}
                                       maxHeight='max'>
                                    <Card maxW='sm'>
                                        <CardBody>
                                            <Image
                                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>Living room Sofa</Heading>
                                                <Text>
                                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                                    spaces, earthy toned spaces and for people who love a chic design
                                                    with a
                                                    sprinkle of vintage design.
                                                </Text>
                                                <Text color='blue.600' fontSize='2xl'>
                                                    $450
                                                </Text>
                                            </Stack>
                                        </CardBody>
                                        <Divider/>
                                        <CardFooter>
                                            <ButtonGroup spacing='2'>
                                                <Button variant='solid' colorScheme='blue'>
                                                    Buy now
                                                </Button>
                                                <Button variant='ghost' colorScheme='blue'>
                                                    Add to cart
                                                </Button>
                                            </ButtonGroup>
                                        </CardFooter>
                                    </Card>
                                    <Card maxW='sm'>
                                        <CardBody>
                                            <Image
                                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>Living room Sofa</Heading>
                                                <Text>
                                                    This sofa is perfect for modern tropical spaces, baroque inspired
                                                    spaces, earthy toned spaces and for people who love a chic design
                                                    with a
                                                    sprinkle of vintage design.
                                                </Text>
                                                <Text color='blue.600' fontSize='2xl'>
                                                    $450
                                                </Text>
                                            </Stack>
                                        </CardBody>
                                        <Divider/>
                                        <CardFooter>
                                            <ButtonGroup spacing='2'>
                                                <Button variant='solid' colorScheme='blue'>
                                                    Buy now
                                                </Button>
                                                <Button variant='ghost' colorScheme='blue'>
                                                    Add to cart
                                                </Button>
                                            </ButtonGroup>
                                        </CardFooter>
                                    </Card>
                                </Stack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Container>
            </Layout>
        </>

    )
}

