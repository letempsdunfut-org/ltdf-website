import {Trans, useTranslation} from 'next-i18next'
import Layout from '../../../components/layout';
import {
    Box,
    VStack,
    Center,
    Heading,
    Container  } from '@chakra-ui/react'
import Head from 'next/head';
import Image from 'next/image';
import iconCouv from '../../../public/images/couverture/logo-tireuse.png'
import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'


const getStaticProps = makeStaticProps(['monthly', 'common']);
export {getStaticPaths, getStaticProps};

export default function Booking() {
    const {t} = useTranslation(['monthly', 'common']);
    const name = t('common:title');

    return (
        <>
        <Layout>
        <Head>
          <title>{t('booking:pageTitle')}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"} backgroundColor={"white"}>
          <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>
            <VStack spacing={5} alignItems={'center'} h={"fit"}>
              <Box w='100%' h='100%'>
              <Image
                  src={iconCouv}
                  alt={name}
                  loading="lazy"
                  style={{
                    position: 'relative',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    width: 'auto',
                    margin: 'auto',
                    padding: '6px'
                  }}
                />
                <Heading as='h1' fontWeight={600} fontSize={{base: '4xl', sm: '3xl', md: '5xl'}}
                         lineHeight={'110%'} textAlign='center' position={'relative'} color={'black'}>
                  {t("monthly:heading")}
                </Heading>
                <Heading as='h2' fontWeight={500} fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                         lineHeight={'110%'} textAlign='center' position={'relative'} color={'black'}>
                  {t("monthly:subheading1")}
                </Heading>
                <Heading as='h2' fontWeight={700} fontSize={{base: '2xl', sm: '1xl', md: '2xl'}}
                         lineHeight={'110%'} textAlign='center' position={'relative'} color={'black'}>
                  {t("monthly:subheading2")}
                </Heading>

              </Box>
            </VStack>
          </Center>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} position={"relative"} backgroundColor={"lightgrey"}>
          <Center minH={'calc(90vh)'} maxHeight='max' maxW='100%'>

          </Center>
        </Container>
        </Layout>
        </>
    )
}
  