import Head from 'next/head'
import Layout from '../../../components/layout'
import { Box, Center, Heading, Text, Container, Stack, Button, VStack, List, ListIcon, ListItem } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { Trans, useTranslation } from 'next-i18next'
import LinkComponent from '../../../components/LinkComponent '

const getStaticProps = makeStaticProps(['rental', 'common']);
export { getStaticPaths, getStaticProps };

export default function Rental() {
  const { t } = useTranslation(['rental', 'common']);
  const name = t('common:title');

  return (
    <>
      <Layout >
        <Head>
          <title>{t('rental:pageTitle')}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='100%' h='100%'>
              <Center>
                <VStack>
                  <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t("common:rental")}
                  </Heading>
                  <Text w='50%' textAlign={"justify"}>
                    {t('subTitle')}
                  </Text>
                  <Text w='50%' textAlign={"justify"} as={'cite'}>
                    <strong>{t('subSubTitle')}</strong>
                  </Text>
                </VStack>
              </Center>

            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Center>
              <Box w='60%' h='100%'>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('retntalDraftTitle')}
                  </Heading>
                  <Center>
                    <VStack textAlign={'justify'}>
                      <Trans i18nKey='retntalDraftText' t={t}
                        components={{ text: <Text />, bold: <strong /> }}>
                      </Trans>
                      <Box paddingLeft={30} >
                        <List spacing={3} w='100%' h='100%' >
                          <Trans i18nKey='rentalDraftList' t={t}
                            components={{ text: <Text />, bold: <strong />, listItem: <ListItem />, listIcon: <ListIcon as={AddIcon} color='#FF893B' /> }}>
                          </Trans>
                        </List>
                      </Box>
                      <Text>
                        <Trans i18nKey='rentalDraftConclusion' t={t}
                          components={{ bold: <strong /> }}>
                        </Trans>
                      </Text>
                    </VStack>
                  </Center>
                  <Center>
                    <LinkComponent href='/booking' _hover={{ textDecoration: 'none' }}><Button backgroundColor={'white'} color='#095d78'>{t('book')}</Button> </LinkComponent>
                  </Center>
                </Stack>
              </Box>
            </Center>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Center>
              <Box w='60%' h='100%' textAlign={'justify'}>
                <Center>
                  <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                    <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                      {t('rentalGlassTitle')}
                    </Heading>
                    <Center>
                      <VStack>
                        <Text>
                          {t('rentalGlassText')}
                        </Text>
                        <Text>
                          TODO : RAJOUTER LES ENJEUX ECOLOGIQUE
                        </Text>
                      </VStack>
                    </Center>
                    <Center>
                      <LinkComponent href='/booking' _hover={{ textDecoration: 'none' }}> <Button backgroundColor={'#095d78'} color='white' >{t('book')}</Button></LinkComponent>
                    </Center>
                  </Stack>
                </Center>
              </Box>
            </Center>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Center w='100%' h='100%'>
              <Box w='60%' h='100%'>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} w='100%' h='100%'>
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('rentalEventTitle')}
                  </Heading>
                  <Center w='100%' h='100%'>
                    <VStack w='100%' h='100%'>
                      <Trans i18nKey='rentalEventText' t={t}
                        components={{ text: <Text />, bold: <strong /> }}>
                      </Trans>
                    </VStack>
                  </Center>
                  <Center>
                    <LinkComponent href='/booking' _hover={{ textDecoration: 'none' }}> <Button backgroundColor={'white'} color='#095d78'>{t('book')}</Button> </LinkComponent>
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

