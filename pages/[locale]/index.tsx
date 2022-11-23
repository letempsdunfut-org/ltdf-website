import Head from 'next/head'
import Layout from '../../components/layout'
import { Box, Center, Flex, Heading, HStack, IconButton, Link, Spacer, Text, Image, Container, Stack, Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['home', 'common']);
export { getStaticPaths, getStaticProps };

export default function Home() {
  const { t } = useTranslation(['home', 'common']);
  const name = t('common:title');
  const Links = [t('common:product'), t('common:rental'), t('common:about_us')];

  return (
    <>
      <Layout >
        <Head>
          <title>{name}</title>
        </Head>
        <Stack>
          <Container height="100vh" maxHeight="95vh" maxW='100%' paddingTop={'5vh'}>
            <Stack height={'100%'} direction={['column', 'row']} >
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >

                  <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {name}
                  </Heading>
                  <Center>
                    <HStack spacing={8} alignItems={'center'}>
                      {Links.map((link) => (
                        <Button key={link} backgroundColor={'#095d78'} color='white'>{link}</Button>
                      ))}
                    </HStack>
                  </Center>


                </Stack>
              </Center>
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Image
                    //priority
                    src="/images/logoLtdf.svg"
                    boxSize='50vh'
                    alt={name}
                  />
                </Stack>
              </Center>
            </Stack>

          </Container>
          <Container height="100vh" maxHeight="95vh" maxW='100%' paddingTop={'5vh'} backgroundColor={'blue.100'}>
            <HStack height={'100%'}>
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Image
                    //priority
                    src="/images/tireurse.png"
                    boxSize='25vh'
                    alt={name}
                  />
                  <Image
                    //priority
                    src="/images/ecoCup.png"
                    boxSize='20vh'
                    alt={name}
                  />
                </Stack>
              </Center>
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >

                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:product')}
                  </Heading>

                  <Center>
                    <Text>
                      {t('productsInfo')}
                    </Text>
                  </Center>


                </Stack>
              </Center>

            </HStack>

          </Container>
          <Container height="95vh" maxHeight="95vh" maxW='100%' paddingTop={'5vh'}>
            <Stack height={'100%'} direction={['column', 'row']} >
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >

                  <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:rental')}
                  </Heading>
                  <Center>
                    <Text>{t('locationInfo')}</Text>
                  </Center>


                </Stack>
              </Center>
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Image
                    //priority
                    src="/images/logoLtdf.svg"
                    boxSize='50vh'
                    alt={name}
                  />
                </Stack>
              </Center>
            </Stack>

          </Container>
          <Container height="100vh" maxHeight="95vh" maxW='100%' paddingTop={'5vh'} backgroundColor={'blue.100'}>
            <HStack height={'100%'}>
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Image
                    //priority
                    src="/images/coco.png"
                    boxSize='25vh'
                    alt={name}
                  />
                  <Image
                    //priority
                    src="/images/coco.png"
                    boxSize='25vh'
                    alt={name}
                  />
                  <Image
                    //priority
                    src="/images/coco.png"
                    boxSize='25vh'
                    alt={name}
                  />
                </Stack>
              </Center>
              <Center w='50%' h='100%' >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >

                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:about_us')}
                  </Heading>

                  <Center>
                    <Text>
                      {t('productsInfo')}
                    </Text>
                  </Center>


                </Stack>
              </Center>

            </HStack>

          </Container>
        </Stack>

      </Layout>
    </>

  )
}

