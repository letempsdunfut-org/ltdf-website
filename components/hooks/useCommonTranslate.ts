import {useTranslation} from "next-i18next";

export function useCommonTranslate() {
    const {t} = useTranslation('common');
    return t
}