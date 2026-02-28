import { getTranslations, setRequestLocale } from "next-intl/server";
import RentalDailyClient from "./rental-daily-client";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: "apps.rental-daily.seo" });

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
    };
}

export default async function Page(props: Props) {
    const { locale } = await props.params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: "apps.rental-daily.seo" });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": t("title"),
                        "description": t("description"),
                        "image": "https://letempsdunfut.ca/images/tireurse.png",
                        "offers": {
                            "@type": "Offer",
                            "price": "150.00",
                            "priceCurrency": "CAD",
                            "availability": "https://schema.org/InStock",
                            "url": `https://letempsdunfut.ca/${locale}/rental/daily`
                        }
                    })
                }}
            />
            <RentalDailyClient />
        </>
    );
}
