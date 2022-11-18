import Head from 'next/head'
import Layout, { name } from '../../components/layout'
import { Link, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['home']);
export { getStaticPaths, getStaticProps };

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <Layout home  >
      <Head>
        <title>{name}</title>
      </Head>
      <Text textAlign='center' fontSize='larger' >
        { t('description')}<br />
        {t('rental')} <Link href='mailto:location@letempsdunfut.ca' isExternal color='#095d78'> <Text as='b'>{t('email')}</Text> <EmailIcon mx='2px' style={{ marginBottom: "4px" }} /></Link>
      </Text>
    </Layout>
  )
}

