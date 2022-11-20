import Head from 'next/head'
import Layout from '../../components/layout'
import { Box, Center, Flex, Heading, HStack, IconButton, Link, Spacer, Text, Image, Container, Stack } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['home', 'common']);
export { getStaticPaths, getStaticProps };

export default function Home() {
  const { t } = useTranslation(['home', 'common']);
  const name = t('common:title');
  return (
    <>
      <Layout >
        <Head>
          <title>{name}</title>
        </Head>
        <Container height="100vh" maxHeight="95vh" maxW='100%' backgroundColor={'cyan'} paddingTop={'5vh'}>
          <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
            <Flex>
              <Box p='4' bg='red.400'>
                <Heading as='h1'
                  fontWeight={600}
                  fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }}
                  lineHeight={'110%'}
                  textAlign='center' alignSelf='flex-end'>
                  {name}
                </Heading>
              </Box>
              <Spacer />
              <Box p='4' bg='green.400'>
                <Image
                  //priority
                  src="/images/logoLtdf.svg"
                  boxSize='30vh'
                  alt={name}
                />
              </Box>
            </Flex>

            <Center>
              <HStack spacing={8}>
                <IconButton aria-label='go to Facebook' backgroundColor='white'
                  icon={<Image borderRadius='full' src="/images/Facebook_f_logo_(2021).svg" alt='Facebook logo' />}
                  onClick={() => { window.open('https://www.facebook.com/people/Le-temps-dun-f%C3%BBt/100087660347259/') }} />


                <IconButton aria-label='go to Instagram' backgroundColor='white'
                  icon={<Image boxSize="40px" src="/images/Instagram_logo_2016.svg" alt='Instagram logo' />}
                  onClick={() => { window.open('https://www.instagram.com/ltdf_qc/') }} />
              </HStack>
            </Center>


            <Text textAlign='center' fontSize='larger' >
              {t('description')}<br />
              {t('rental')} <Link href='mailto:location@letempsdunfut.ca' isExternal color='#095d78'> <Text as='b'>{t('email')}</Text> <EmailIcon mx='2px' style={{ marginBottom: "4px" }} /></Link>
            </Text>

          </Stack>
        </Container>
        <Container height="100vh" maxHeight="95vh" maxW='100%' backgroundColor={'navy'}>

        </Container>

      </Layout>
    </>

  )
}

