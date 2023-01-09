import Head from 'next/head'
import Layout from '../../../components/layout'
import { Box, Center, Flex, Heading, HStack, IconButton, Link, Spacer, Text, Container, Stack, Button, ButtonGroup, Wrap, WrapItem, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, List, ListItem, VStack, ListIcon } from '@chakra-ui/react'
import { AddIcon, ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'
import draftPics from '../../../public/images/tireurse.png'
import ecoCup from '../../../public/images/ecoCupDef.png'
import LinkComponent from '../../../components/LinkComponent '
import imgCouverture from "../../../public/images/couverture/drafts-bw.jpg";
import iconPromo from "../../../public/images/icons/promotions-transp.png";
import iconTireuse from '../../../public/images/icons/tireuse-transp.png'

const getStaticProps = makeStaticProps(['product', 'common']);
export { getStaticPaths, getStaticProps };

export default function Product() {
  const { t } = useTranslation(['product', 'common']);
  const name = t('common:title');

  return (
    <>
      <Layout >
        <Head>
          <title>{t('product:pageTitle')}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"}>
          <Image
              src={imgCouverture}
              alt={name}
              loading="lazy"
              layout='fill'
              objectFit={'cover'}
              objectPosition={'center'}
          />
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'}
                 maxHeight='max'>
            <Box w='100%' h='100%'>
              <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                       lineHeight={'110%'} textAlign='center' position={'relative'}
                       textTransform={'uppercase'}
                       margin={'44px'}
                       color={'white'}>
                {t("common:product")}
              </Heading>
            </Box>
          </Stack>
          <Image
              src={iconTireuse}
              alt={name}
              loading="lazy"
              style={{position: 'absolute', bottom: '26px', left: 0, right:0, backgroundColor: 'white', borderRadius: '50%', width: '75px', margin: 'auto', padding: '6px'}}
          />
        </Container>

        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'} >
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='50%' h='100%'>
              <Center w='100%' h='100%'>
                <Image
                  src={draftPics}
                  alt={name}
                  loading={'lazy'}
                />

              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center w={'100%'} h={'100%'}>
                <VStack w={'100%'} h={'100%'}>
                  <Box w='90%' h='100%'>
                    <Accordion defaultIndex={[0]}>
                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('draftTechnicalTilte')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                          <List w={'100%'} h={'100%'} spacing={3}>
                            <Trans i18nKey='draftTechnicalList' t={t}
                              components={{ listItem: <ListItem />, listIcon: <ListIcon as={ArrowForwardIcon} color='#FF893B' /> }}>
                            </Trans>
                          </List>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('draftMaintainTitle')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                          {t('draftMaintainInfo')}
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('draftDelivryTitle')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>

                        <AccordionPanel pb={4}>
                          {t('draftDelivryInfo')}
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('draftServiceTitle')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>

                        <AccordionPanel pb={4}>
                          {t('draftServiceInfo')}
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('draftPriceTitle')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                          <Trans i18nKey='draftPricePanel' t={t}
                            components={{ cr: <br />, text: <Text as={'cite'} />, box: <Box fontSize={'xs'} />, list: <List w={'100%'} h={'100%'} spacing={3} mb={5} />, listItem: <ListItem />, listIcon: <ListIcon as={ArrowForwardIcon} color='#FF893B' /> }}>
                          </Trans>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                  <Box w='100%' h='100%'>
                    <Center>
                      <LinkComponent href='/booking' _hover={{ textDecoration: 'none' }}> <Button backgroundColor={'white'} color='#095d78'>{t('book')}</Button> </LinkComponent>
                    </Center>
                  </Box>
                </VStack>
              </Center>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='50%' h='100%'>
              <Center w={'100%'} h={'100%'}>
                <VStack w={'100%'} h={'100%'}>
                  <Box w='90%' h='100%'>
                    <Accordion defaultIndex={[0]}>
                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('glassTechnicalTilte')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                          <List w={'100%'} h={'100%'} spacing={3}>
                            <Trans i18nKey='draftTechnicalList' t={t}
                              components={{ listItem: <ListItem />, listIcon: <ListIcon as={ArrowForwardIcon} color='#FF893B' /> }}>
                            </Trans>
                          </List>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('glassCoverTilte')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                          {t('glassCoverInfo')}
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('glassHygenTilte')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>

                        <AccordionPanel pb={4}>
                          {t('glassHygenInfo')}
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <strong>
                                {t('glassPriceTilte')}
                              </strong>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </Heading>
                        <AccordionPanel pb={4}>
                          <Trans i18nKey='glassPricePanel' t={t}
                            components={{ cr: <br />, text: <Text as={'cite'} />, box: <Box fontSize={'xs'} />, list: <List w={'100%'} h={'100%'} spacing={3} mb={5} />, listItem: <ListItem />, listIcon: <ListIcon as={ArrowForwardIcon} color='#FF893B' /> }}>
                          </Trans>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                  <Box w='100%' h='100%'>
                    <Center>
                      <LinkComponent href='/booking' _hover={{ textDecoration: 'none' }}> <Button backgroundColor={'#095d78'} color='white' >{t('book')}</Button></LinkComponent>
                    </Center>
                  </Box>
                </VStack>
              </Center>
            </Box>

            <Box w='50%' h='100%'>
              <Center>
                <Image
                  src={ecoCup}
                  alt={name}
                  loading={'lazy'}
                />
              </Center>
            </Box>
          </Stack>
        </Container>
      </Layout>
    </>

  )
}

