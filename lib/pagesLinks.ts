import {useCommonTranslate} from "../components/hooks/useCommonTranslate";

export function usePagesLinks() {
    const t = useCommonTranslate()
    return [
        {name: t('common:rentalDaily'), path: '/rental/daily'},
        {name: t('common:rentalMonthly'), path: '/rental/monthly'},
        {name: t('common:product'), path: '/product'},
        {name: t('common:professional'), path: '/professional'}
    ];
}