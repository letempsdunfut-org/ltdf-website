import Head from 'next/head'
import Layout, { name } from '../components/layout'
import { Link, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Layout home  >
      <Head>
        <title>{name}</title>
      </Head>
      <Text textAlign='center' fontSize='larger'>
        Location de tireuses à bière et/ou kombucha pour entreprises et particuliers sur l’île de Montréal. <br />
        Envie de louer nos machines ? Envoyez-nous <Link href='mailto:location@letempsdunfut.ca' isExternal color='#095d78'> <Text as='b'>un courriel !</Text> <EmailIcon mx='2px' style={{ marginBottom: "4px" }} /></Link>
      </Text>
    </Layout>
  )
}

