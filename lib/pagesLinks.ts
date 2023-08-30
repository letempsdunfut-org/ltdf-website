import {TFunction} from "i18next";
import {useTranslation} from "next-i18next";
import {useCommonTranslate} from "../components/hooks/useCommonTranslate";

export function usePagesLinks() {
    const t = useCommonTranslate()
    return [
        {name: t('common:rental'), path: '/rental'},
        {name: t('common:product'), path: '/product'},
        {name: t('common:professional'), path: '/professional'}
    ];
}