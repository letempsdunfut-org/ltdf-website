import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import {useTranslation} from 'next-i18next'

export default function Booking() {
    const {t} = useTranslation(['monthly', 'common']);
    const name = t('common:title');

    return (
        <>
        
        </>
    )
}
  