import Head from 'next/head'
import Layout from '../../../components/layout'
import { Box, Center, Flex, Heading, HStack, IconButton, Link, Spacer, Text, Container, Stack, Button, ButtonGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import draftPics from '../../../public/images/tireurse.png'
import ecoCup from '../../../public/images/ecoCupDef.png'

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
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='100%' h='100%'>
              <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                {t("common:product")}
              </Heading>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'} >
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='49%' h='100%'>
              <Center>
                <Image
                  src={draftPics}
                  alt={name}
                  loading={'lazy'}
                />

              </Center>
            </Box>
            <Box w='49%' h='100%'>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:product')}
                  </Heading>
                  <Center>
                    <Text>
                      {t('productsInfo')}
                    </Text>
                  </Center>
                  <Center>
                    <Button backgroundColor={'#095d78'} color='white' >{t('moreinfo')}</Button>
                  </Center>
                </Stack>
              </Center>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='49%' h='100%'>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:rental')}
                  </Heading>
                  <Center>
                    <Text>{t('locationInfo')}</Text>
                  </Center>
                  <Center>
                    <Button backgroundColor={'#095d78'} color='white' >{t('moreinfo')}</Button>
                  </Center>
                </Stack>
              </Center>
            </Box>
            <Box w='49%' h='100%'>
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

