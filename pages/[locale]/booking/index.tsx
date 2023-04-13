import Head from 'next/head'
import Layout from '../../../components/layout'
import { Box, Center, InputLeftElement, Flex, Checkbox, Heading, HStack, IconButton, Link, Spacer, Text, Image, Container, Stack, Button, ButtonGroup, Wrap, WrapItem, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['booking', 'common']);
export { getStaticPaths, getStaticProps };

export default function Booking() {
  const { t } = useTranslation(['booking', 'common']);
  const name = t('common:title');

  return (
    <>
      <Layout >
        <Head>
          <title>{t('booking:pageTitle')}</title>
        </Head>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='100%' h='100%'>
              <Heading as='h1' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                {t("common:booking")}
              </Heading>

            </Box>
          </Stack>
        </Container>
        <Container minHeight={'calc(95vh)'} maxHeight='max' maxW='100%' paddingTop={'16'} backgroundColor={'#095d78'}>
          <Stack direction={['column', 'row']} spacing={8} alignItems={'center'} minHeight={'calc(80vh)'} maxHeight='max' >
            <Box w='49%' h='100%' color={'white'}>
              <Center>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }} >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>

                  </Heading>
                  <Center>
                    <Text>
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center bg={'white'}>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }}  >
                  <Heading as='h3' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('booking:bookingWIP')}
                  </Heading>
                  <Center>
                    <Text>{t('booking:bookingWIPText')}</Text>
                  </Center>
                  <Center>
                    <Button  onClick={() => window.location.href = 'mailto:yourmail@domain.com'}>{t('common:contactUs')}</Button>
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

