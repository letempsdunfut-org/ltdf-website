import Head from 'next/head'
import Layout from '../../components/layout'
import { Box, Center, Heading, HStack, Text, Container, Stack, Button, ListIcon, Wrap, WrapItem, VStack, AspectRatio, ListItem, List } from '@chakra-ui/react'
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Trans, useTranslation } from 'next-i18next'
import LinkComponent from '../../components/LinkComponent '
import Image from 'next/image'
import logoLtdf from '../../public/images/logoLtdf.svg'
import imgLocation from '../../public/images/imgLocation.png'
import tireurse from '../../public/images/tireurse.png'
import ecoCupDef from '../../public/images/ecoCupDef.png'
import coco from '../../public/images/coco.png'


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
              <Center mt={'5'}>
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
              <Center >
                <Box boxSize={'50vh'}>
                  <Image
                    src={logoLtdf}
                    alt={name}
                    loading="lazy"
                  />
                </Box>

              </Center>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='50%' h='100%'>
              <Center>
                <Box boxSize={'60vh'}>
                  <Image
                    src={imgLocation}
                    alt={name}
                    loading="lazy"
                    sizes='(max-width: 50vh)'
                  />
                </Box>
              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:rental')}
                  </Heading>
                  <VStack w='100%' h='100%'>
                    <Heading as='h3' fontWeight={600} fontSize={{ base: '2xl', sm: '1xl', md: '2xl' }} lineHeight={'110%'} >
                      {t('rentalSubTitle')}
                    </Heading>

                    <List spacing={3} w='100%' h='100%'>
                      <ListItem>
                        <ListIcon as={AddIcon} color='#FF893B' />
                        <Trans i18nKey='rentalDraft' t={t}
                          components={{ cite: <Text as={'cite'} />, bold: <strong /> }}>
                        </Trans>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={AddIcon} color='#FF893B' />
                        <Trans i18nKey='rentalGlass' t={t}
                          components={{ cite: <Text as={'cite'} />, bold: <strong /> }}>
                        </Trans>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={AddIcon} color='#FF893B' />
                        <Trans i18nKey='rentalLicence' t={t}
                          components={{ cite: <Text as={'cite'} />, bold: <strong /> }}>
                        </Trans>
                      </ListItem>
                    </List>
                  </VStack>
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
            <Box w='50%' h='100%' ml={20}>
              <Center >
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('common:product')}
                  </Heading>
                  <Center>
                    <List spacing={3} w='100%' h='100%'>
                      <ListItem>
                        <ListIcon as={CheckIcon} color='#FF893B' />
                        <Trans i18nKey='productDraft' t={t}
                          components={{ text: <Text />, bold: <strong /> }}>
                        </Trans>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color='#FF893B' />
                        <Trans i18nKey='productGlass' t={t}
                          components={{ text: <Text />, bold: <strong /> }}>
                        </Trans>
                      </ListItem>
                    </List>
                  </Center>
                  <Center>
                    <LinkComponent href='/product' _hover={{ textDecoration: 'none' }}><Button backgroundColor={'#095d78'} color='white'  >{t('moreinfo')}</Button></LinkComponent>
                  </Center>
                </Stack>
              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center>
                <Stack direction={['column', 'row']} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} w='100%' h='100%'>
                  <Box boxSize={'50vh'}>
                    <Image
                      src={tireurse}
                      alt={name}
                      loading="lazy"
                    />
                  </Box>
                  <Box boxSize={'50vh'}>
                    <Image
                      src={ecoCupDef}
                      alt={name}
                      loading="lazy"
                    />
                  </Box>
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
                    <Box boxSize={'25vh'}>
                      <Image
                        src={coco}
                        alt={name}
                        loading="lazy"
                      />
                    </Box>
                    <Box boxSize={'25vh'}>

                      <Image
                        src={coco}
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

