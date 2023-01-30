import Head from 'next/head'
import Layout from '../../../components/layout'
import { Box, Center, InputLeftElement, Flex, Checkbox, Heading, Spinner, HStack, useCheckbox, IconButton, Link, Spacer, Text, Image, Container, Stack, Button, ButtonGroup, Wrap, WrapItem, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
import { useTranslation } from 'next-i18next'
import { getLogger } from '../../../logging/log-util'
import { DateTime } from 'luxon'
import type { BookingRequest } from '../../api/book'
import React from 'react'

const getStaticProps = makeStaticProps(['booking', 'common']);
const logger = getLogger('pages');
export { getStaticPaths, getStaticProps };

export default function Booking() {
  const now = DateTime.now().toFormat('yyyy-MM-dd')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation(['booking', 'common']);
  const name = t('common:title');

  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [startDate, setStartDate] = React.useState<string>(now);
  const [endDate, setEndDate] = React.useState<string>(now);
  const [qty, setQty] = React.useState<number>(1);
  const [co2, setCo2] = React.useState<string>('false');

  const [booking, setBooking] = React.useState<object>({});

  const [loading, setLoading] = React.useState<boolean>(false)

  const [firstNameInvalid, setFirstNameInvalid] = React.useState<boolean>(false);
  const [lastNameInvalid, setLastNameInvalid] = React.useState<boolean>(false);
  const [emailInvalid, setEmailInvalid] = React.useState<boolean>(false);
  const [startDateInvalid, setStartDateInvalid] = React.useState<boolean>(false);
  const [endDateInvalid, setEndDateInvalid] = React.useState<boolean>(false);

  const handleClick = async function () {
    setLoading(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const bookingRequest: BookingRequest = {
      firstName,
      lastName,
      email,
      startDate,
      endDate,
      qtn: qty,
      co2:  (co2.toLowerCase() == 'true')
    }


    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(bookingRequest)
    };
    
    const res = await fetch("localhost:3000/api/book", requestOptions)
    const bookingResponse = await res.json()
    console.log(JSON.stringify(bookingResponse))
    setBooking(bookingResponse)
    onOpen()
    setLoading(false)
  }

  const emailValidator = (value: string, invalidState: React.Dispatch<React.SetStateAction<boolean>>) => {
    const validRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (value === undefined || value === null || value === '' || !value.match(validRegex)) {
      invalidState(true)
    } else {
      invalidState(false)
    }
  }

  const stringValidator = (value: string, invalidState: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (value === undefined || value === null || value === '') {
      invalidState(true)
    } else {
      invalidState(false)
    }
  }

  const dateValidator = (value: string, invalidState: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (value === undefined || value === null || value === '') {
      const dt = DateTime.fromISO(value)
      const now = DateTime.now()
      console.log(`now: ${now.toLocaleString()} | dt: ${dt.toLocaleString()}`)
      if (dt > now)
        invalidState(true)
      else
        invalidState(false)
    } else {
      invalidState(false)
    }
  }

  return (
    <>
      <Layout>
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
                    {t('booking:infoTitle')}
                  </Heading>
                  <Center>
                    <Text>
                      {t('booking:info')}
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Box>
            <Box w='50%' h='100%'>
              <Center bg={'white'}>
                <Stack as={Box} box={'center'} spacing={{ base: 4, md: 8 }} py={{ base: 5, md: 10 }}  >
                  <Heading as='h2' fontWeight={600} fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }} lineHeight={'110%'} textAlign='center'>
                    {t('booking:bookingTitle')}
                  </Heading>
                  <Flex>
                    <FormControl mr="5%" isRequired isInvalid={firstNameInvalid}>
                      <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                        {t('firstname')}
                      </FormLabel>
                      <Input id="first-name" placeholder={t('firstname')} bg={'white'} value={firstName} onBlur={(e: React.FocusEvent<HTMLInputElement>) => { stringValidator(e.target.value, setFirstNameInvalid) }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                    </FormControl>

                    <FormControl isRequired isInvalid={lastNameInvalid} >
                      <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                        {t('lastname')}
                      </FormLabel>
                      <Input id="last-name" placeholder={t('lastname')} bg={'white'} onBlur={(e: React.FocusEvent<HTMLInputElement>) => { stringValidator(e.target.value, setLastNameInvalid) }} value={lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
                    </FormControl>
                  </Flex>
                  <FormControl mt="2%" isRequired isInvalid={emailInvalid}>
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                      {t('email')}
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='gray.300' />
                      </InputLeftElement>
                      <Input id="email" type="email" bg={'white'} onBlur={(e: React.FocusEvent<HTMLInputElement>) => { emailValidator(e.target.value, setEmailInvalid) }} value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                    </InputGroup>
                    <FormHelperText>{t('emailInfo')}</FormHelperText>
                  </FormControl>
                  <Flex>
                    <FormControl mr="5%" isRequired isInvalid={startDateInvalid}>
                      <FormLabel htmlFor="startDate" fontWeight={'normal'} mt="2%">
                        {t('startDate')}
                      </FormLabel>
                      <Input
                        id='startDate'
                        placeholder={t('datePlaceholder')}
                        size="md"
                        type="date"
                        min={Date.now().toLocaleString()}
                        bg={'white'}
                        value={startDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { dateValidator(e.target.value, setStartDateInvalid) }}

                      />
                    </FormControl>
                    <FormControl isRequired isInvalid={endDateInvalid}>
                      <FormLabel htmlFor="endDate" fontWeight={'normal'} mt="2%">
                        {t('endDate')}
                      </FormLabel>
                      <Input
                        id='endDate'
                        placeholder={t('datePlaceholder')}
                        size="md"
                        type="date"
                        bg={'white'}
                        value={endDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.target.value)}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { dateValidator(e.target.value, setEndDateInvalid) }}
                      />
                    </FormControl>
                  </Flex>
                  <Flex>
                    <FormControl mr="5%">
                      <FormLabel htmlFor="qty" fontWeight={'normal'} mt="2%">
                        {t('qty')}
                      </FormLabel>
                      <Input
                        id='qty'
                        type={'number'}
                        max={3}
                        min={1}
                        bg={'white'}
                        value={qty}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQty(+e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="co2" fontWeight={'normal'} mt="2%">
                        {t('options')}
                      </FormLabel>
                      <Checkbox id='co2' bg={'white'} value={co2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCo2(e.target.value)}>CO2 + 30$</Checkbox>
                    </FormControl>
                  </Flex>
                  <Button disabled={loading} onClick={handleClick}>
                    {loading ? (<Spinner />) : (t('submit'))}
                  </Button>
                </Stack>
              </Center>
            </Box>
          </Stack>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Demande de réservation enregistrée</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Votre demande de réservation a été transmise. Nos équipes vont bientot vous recontacter par courriel pour confirmer votre réservation.

                ID :

              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </Layout>
    </>

  )
}

