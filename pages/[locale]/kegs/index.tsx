import Head from 'next/head'
import Layout from '../../../components/layout'
import {
  Box,
  Center,
  Heading,
  Text,
  Container,
  Stack,
  Button,
  VStack,
  List,
  ListIcon,
  ListItem,
  Divider,
  ButtonGroup,
  Grid,
  GridItem,
  Wrap, WrapItem,
  Card, CardHeader, CardBody, CardFooter
} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {Trans, useTranslation} from 'next-i18next'
import LinkComponent from '../../../components/LinkComponent '
import Image from "next/image";
import imgCouverture from "../../../public/images/couverture/private-party-cover.jpg";
import iconPromo from '../../../public/images/icons/promotions-transp.png'
import iconBeer from "../../../public/images/icons/degustation-transp.png";

const getStaticProps = makeStaticProps(['kegs', 'common']);
export {getStaticPaths, getStaticProps};

export default function Kegs() {
  const {t} = useTranslation(['kegs', 'common']);
  const name = t('common:title');

  const magicRatio = ['95%', '95%', '90%', '80%', '70%', '60%'];

  return (
    <>
      <Layout>
        <Head>
          <title>{t('rental:pageTitle')}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight={'calc(95vh)'} maxW='100%' paddingTop={'16'}
                   position={"relative"}>
          <Image
            src={imgCouverture}
            alt={name}
            loading="lazy"
            fill={true}
            style={{objectFit: 'cover', objectPosition: 'center', backgroundColor: 'gray'}}
          />

          <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>
            <VStack spacing={5} alignItems={'center'} h={"fit"}>
              <Box>
                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                         lineHeight={'110%'} textAlign='center' position={'relative'}
                         textTransform={'uppercase'}
                         margin={'44px'}
                         color={'white'}>
                  {t("common:rental")}
                </Heading>
              </Box>

              <Box>

                <Image
                  src={iconPromo}
                  alt={name}
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
              </Box>
            </VStack>
          </Center>

        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}
                   backgroundColor={'#095d78'} color={'white'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                 maxHeight='max'>
            <Center>
              <Box w={magicRatio} h='100%'>
                <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}>
                  <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                           lineHeight={'110%'} textAlign='center'>
                    {t('KegsTitle')}
                  </Heading>
                  <Center>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                      <GridItem w='100%' h='max' minH={430}>
                        <Card maxW='sm'>
                          <CardBody>
                            <Image
                              src='https://images.unsplash.com/photo-1604029163382-980e2fa180f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                              alt='Green double couch with wooden legs'
                              width={'400'}
                              height={'350'}
                            />
                            <Stack mt='6' spacing='3'>
                              <Heading size='md'>Zhang Hua</Heading>
                              <Text>
                                Blanche - Péche, Coriandre & Zeste De Citron
                              </Text>
                              <Text color='blue.600' fontSize='2xl'>
                                $150
                              </Text>
                            </Stack>
                          </CardBody>
                          <Divider/>
                          <CardFooter>
                            4.5% IBU:40
                          </CardFooter>
                        </Card></GridItem>
                      <GridItem w='100%' h='max' minH={430}> <Card maxW='sm'>
                        <CardBody>
                          <Image
                            src='https://images.unsplash.com/photo-1604029163382-980e2fa180f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            width={'400'}
                            height={'350'}
                          />
                          <Stack mt='6' spacing='3'>
                            <Heading size='md'>SHHHAAARKS</Heading>
                            <Text>
                              Triple aux mandarines
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                              $500
                            </Text>
                          </Stack>
                        </CardBody>
                      </Card></GridItem>
                      <GridItem w='100%' h='max'><Card maxW='sm'>
                        <CardBody>
                          <Image
                            src='https://images.unsplash.com/photo-1604029163382-980e2fa180f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            width={'400'}
                            height={'350'}
                          />
                          <Stack mt='6' spacing='3'>
                            <Heading size='md'>SHHHAAARKS</Heading>
                            <Text>
                              Triple aux mandarines
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                              $500
                            </Text>
                          </Stack>
                        </CardBody>
                      </Card></GridItem>
                      <GridItem w='100%' h='max'> <Card maxW='sm'>
                        <CardBody>
                          <Image
                            src='https://images.unsplash.com/photo-1604029163382-980e2fa180f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            width={'400'}
                            height={'350'}
                          />
                          <Stack mt='6' spacing='3'>
                            <Heading size='md'>Moa</Heading>
                            <Text>
                              New Zealend Pale Ale
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                              $450
                            </Text>
                          </Stack>
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                          4.5% IBU:40
                        </CardFooter>
                      </Card></GridItem>
                    </Grid>
                  </Center>
                  <Center>
                    <LinkComponent href='/booking' _hover={{textDecoration: 'none'}}><Button
                      backgroundColor={'white'} color='#095d78'>{t('book')}</Button>
                    </LinkComponent>
                  </Center>
                </Stack>
              </Box>
            </Center>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                 maxHeight='max'>
            <Center w='100%' h='100%'>
              <Box w={magicRatio} h='100%'>
                <Stack as={Box} box={'center'} spacing={{base: 4, md: 8}} py={{base: 5, md: 10}}
                       w='100%' h='100%'>
                  <Heading as='h2' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                           lineHeight={'110%'} textAlign='center'>
                    {t('rentalEventTitle')}
                  </Heading>
                  <Center w='100%' h='100%'>
                    <VStack w='100%' h='100%' textAlign={'justify'}>
                      <Trans i18nKey='rentalEventText' t={t}
                             components={{text: <Text/>, bold: <strong/>}}>
                      </Trans>
                    </VStack>
                  </Center>
                  <Center>
                    <LinkComponent href='/booking' _hover={{textDecoration: 'none'}}> <Button
                    >{t('book')}</Button>
                    </LinkComponent>
                  </Center>
                </Stack>
              </Box>
            </Center>

          </Stack>
        </Container>
      </Layout>
    </>

  )
}

