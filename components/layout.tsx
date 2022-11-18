import Head from 'next/head'
import { IconButton, Image, Container, Box, Heading, Stack, Center, HStack } from '@chakra-ui/react'
import Link from 'next/link'

export const name = 'Le temps d\'un fût'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  
  return (
    <div>
      <Head>
        
        <link rel="icon" href="/faviconltdf.ico" />
        <meta
          name="description"
          content="Location de tireuse à bière et/ou kombucha pour entreprises et particuliers sur l’île de Montréal."
        />
        <meta
          property="og:image"
          content="https://deft-moxie-184876.netlify.app/images/logoLtdf.svg"
        />
        <meta name="og:title" content={name} />
      </Head>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          box={'center'}
          spacing={{ base: 4, md: 8 }}
          py={{ base: 5, md: 10 }}>

          {home ? (
            <>
              <Center>
                <Image
                  //priority
                  src="/images/logoLtdf.svg"
                  boxSize='300px'
                  alt={name}
                />
              </Center>
              <Heading
                fontWeight={600}
                fontSize={{ base: '4xl', sm: '3xl', md: '4xl' }}
                lineHeight={'110%'}
                textAlign='center'>
                {name}
              </Heading>
            </>
          ) : (
            <>
              <Center>
                <Link href="/">
                  <Image
                    //priority
                    src="/images/logoLtdf.svg"
                    boxSize='300px'
                    alt={name}
                  />
                </Link>
              </Center>
              <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
                lineHeight={'110%'}>
                <Link href="/">
                  {name}
                </Link>
              </Heading>
            </>
          )}

          <div>
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
          </div>

          <main>{children}</main>
          {!home && (
            <div>
              <Link href="/">← Back to home</Link>
            </div>
          )}

        </Stack>
      </Container>
    </div >
  )
}
