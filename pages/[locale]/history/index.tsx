import Head from 'next/head'
import Layout from '../../../components/layout'
import { Box, Center, Flex, Heading, HStack, IconButton, Link, Spacer, Text, Container, Stack, Button, ButtonGroup, Wrap, WrapItem, VStack } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'
import coco from '../../../public/images/coco.png'
import Image from 'next/image'


const getStaticProps = makeStaticProps(['history', 'common']);
export { getStaticPaths, getStaticProps };

export default function History() {
  const { t } = useTranslation(['history', 'common']);
  const name = t('common:title');

  return (
    <>
      <Layout >
        <Head>
          <title>{t('history:pageTitle')}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='100%' h='100%'>
              <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                {t("common:about_us")}
              </Heading>
            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'} color={'white'}>

          <VStack spacing={8} alignItems={'center'} w={'100%'} h={'100%'}>
            <Box >
              <Stack direction={['column', 'row']} spacing={4}>
                <Center>
                  <Box w={"60%"}>
                    <Center>
                      <Text textAlign={'justify'}> {t('one')} </Text>
                    </Center>
                  </Box>
                  <Box boxSize={'25vh'} ml={5}>
                    <Image
                      src={coco}
                      alt={name}
                      loading="lazy"
                      style={{ borderRadius: '50%' }}
                    />
                  </Box>
                </Center>

              </Stack>

            </Box>
            <Box >
              <Stack direction={['column', 'row']} >
                <Center>
                  <Box boxSize={'25vh'}>
                    <Image
                      src={coco}
                      alt={name}
                      loading="lazy"
                      style={{ borderRadius: '50%' }}
                    />
                  </Box>
                  <Box w={"60%"} ml={5}>
                    <Center>
                      <Text textAlign={'justify'}> {t('two')} </Text>
                    </Center>
                  </Box>
                </Center>

              </Stack>

            </Box>
            <Box >
              <Stack direction={['column', 'row']} >
                <Center>
                  <Box w={"60%"}>
                    <Center>
                      <Text textAlign={'justify'}> {t('three')} </Text>
                    </Center>
                  </Box>
                  <Box boxSize={'25vh'} ml={5}>
                    <Image
                      src={coco}
                      alt={name}
                      loading="lazy"
                      style={{ borderRadius: '50%' }}  
                    />
                  </Box>
                </Center>

              </Stack>

            </Box>
          </VStack>

        </Container>
      </Layout>
    </>

  )
}

