"use client"

import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { useTransition } from "react"

export const LocaleSwitcher = () => {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [, startTransition] = useTransition()

    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value
        startTransition(() => {
            router.replace(pathname, { locale: newLocale })
        })
    }

    return (
        <NativeSelectRoot size="sm" width="fit-content">
            <NativeSelectField
                value={locale}
                onChange={handleLocaleChange}
                bg="bg.panel"
            >
                <option value="en-CA">EN</option>
                <option value="fr-CA">FR</option>
            </NativeSelectField>
        </NativeSelectRoot>
    )
}
