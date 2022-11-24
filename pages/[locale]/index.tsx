import Head from 'next/head'
import Layout from '../../components/layout'
import { Box, Center, Flex, Heading, HStack, IconButton, Link, Spacer, Text, Container, Stack, Button, ButtonGroup, Wrap, WrapItem, VStack, AspectRatio } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Trans, useTranslation } from 'next-i18next'
import LinkComponent from '../../components/LinkComponent '
import Image from 'next/image'
import { truncate } from 'fs'

const getStaticProps = makeStaticProps(['home', 'common']);
export { getStaticPaths, getStaticProps };

export default function Home() {
  const { t } = useTranslation(['home', 'common']);
  const name = t('common:title');
  const Links = [
    { name: t('common:rental'), path: '/rental' },
    { name: t('common:product'), path: '/product' },
    { name: t('common:about_us'), path: '/history' }
  ];

  return (
    <>
      <Layout >
        <Head>
          <title>{name}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='49%' h='100%'>
              <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                {name}
              </Heading>
              <Center>
                <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'50%'} maxHeight='max'>
                  <Wrap spacing={4}>
                    {Links.map((link) => (
                      <WrapItem key={link.name}>
                        <LinkComponent key={link.name} href={link.path} _hover={{ textDecoration: 'none' }}><Button key={link.name} backgroundColor={'#095d78'} color='white' >{link.name}</Button></LinkComponent>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Stack>
              </Center>
            </Box>
            <Box w='49%' h='100%'>
              <Center>
                <AspectRatio ratio={1 / 1} boxSize='50vh'>
                  <Image
                    //priority
                    src="/images/logoLtdf.svg"
                    alt={name}
                    fill={true}
                    sizes={'50vh'}
                    loading="lazy"
                  />
                </AspectRatio>
              </Center>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='50%' h='100%'>
              <Center>
                <AspectRatio ratio={1 / 1} boxSize='50vh'>
                  <Image
                    //priority
                    src="/images/imgLocation.png"
                    alt={name}
                    fill={true}
                    sizes={'50vh'}
                    loading="lazy"
                  />
                </AspectRatio>
              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:rental')}
                  </Heading>
                  <Center>
                    <Text>{t('locationInfo')}</Text>
                  </Center>
                  <Center>
                    <LinkComponent href='/rental' _hover={{ textDecoration: 'none' }}><Button backgroundColor={'white'} color='#095d78' >{t('moreinfo')}</Button></LinkComponent>
                  </Center>
                </Stack>
              </Center>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} >
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='50%' h='100%'>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:product')}
                  </Heading>
                  <Center>
                    <VStack>
                      <Text>
                        {t('productsInfo')}
                      </Text>
                    </VStack>
                  </Center>
                  <Center>
                    <LinkComponent href='/product' _hover={{ textDecoration: 'none' }}><Button backgroundColor={'#095d78'} color='white'  >{t('moreinfo')}</Button></LinkComponent>
                  </Center>
                </Stack>
              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center>
                <Stack direction={['column', 'row']} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <AspectRatio ratio={1 / 1} boxSize='25vh'>
                    <Image
                      src="/images/tireurse.png"
                      alt={name}
                      fill={true}
                      sizes={'25vh'}
                      loading="lazy"
                    />
                  </AspectRatio>
                  <AspectRatio ratio={1 / 1} boxSize='20vh'>
                    <Image
                      src="/images/ecoCup.png"
                      alt={name}
                      fill={true}
                      sizes={'20vh'}
                      loading="lazy"
                    />
                  </AspectRatio>
                </Stack>
              </Center>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='49%' h='100%'>
              <Center>
                <VStack spacing={{ base: 4, md: 8 }}>
                  <HStack spacing={{ base: 4, md: 8 }}>
                    <AspectRatio ratio={1 / 1} boxSize='25vh'>
                      <Image
                        src="/images/coco.png"
                        alt={name}
                        fill={true}
                        sizes={'25vh'}
                        loading="lazy"
                      />
                    </AspectRatio>
                    <AspectRatio ratio={1 / 1} boxSize='25vh'>
                      <Image
                        src="/images/coco.png"
                        alt={name}
                        fill={true}
                        sizes={'25vh'}
                        loading="lazy"
                      />
                    </AspectRatio>
                  </HStack>

                  <AspectRatio ratio={1 / 1} boxSize='25vh' maxH={'25vh'}>
                    <Image
                      src="/images/coco.png"
                      alt={name}
                      fill={true}
                      sizes={'25vh'}
                      loading="lazy"
                    />
                  </AspectRatio>
                </VStack>
              </Center>

            </Box>
            <Box w='49%' h='100%'>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:about_us')}
                  </Heading>

                  <VStack spacing={6}>
                    <Trans i18nKey='history' t={t}
                      components={{ text: <Text />, bold: <strong />, box: <Box verticalAlign='middle' fontWeight='normal' px='5' lineHeight='tall' position='relative' color='white' _before={{ content: `\"\"`, position: 'absolute', display: 'block', left: '-1%', borderLeftWidth: '0.5rem', borderLeftColor: '#FF893B', height: '100%' }} /> }}>
                    </Trans>
                  </VStack>
                  <Center>
                    <LinkComponent href='/history' _hover={{ textDecoration: 'none' }}><Button backgroundColor={'white'} color='#095d78' >{t('moreinfo')}</Button></LinkComponent>
                  </Center>
                </Stack>
              </Center>
            </Box>
          </Stack>
        </Container>
      </Layout>
    </>

  )
}

