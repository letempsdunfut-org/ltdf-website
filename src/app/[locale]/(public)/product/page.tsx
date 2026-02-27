import { getTranslations, setRequestLocale } from "next-intl/server";
import ProductClient from "./product-client";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: "apps.product.seo" });

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
    };
}

export default async function Page(props: Props) {
    const { locale } = await props.params;
    setRequestLocale(locale);

    return <ProductClient />;
}
