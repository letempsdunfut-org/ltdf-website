import { getTranslations, setRequestLocale } from "next-intl/server";
import HomeClient from "./home-client";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "apps.home.seo" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function Page(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Le temps d'un fût",
            "image": "https://letempsdunfut.ca/images/logo.png",
            "@id": "https://letempsdunfut.ca",
            "url": "https://letempsdunfut.ca",
            "telephone": "+1 (438)-793-6644",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Greater Montreal Area",
              "addressLocality": "Montreal",
              "addressRegion": "QC",
              "postalCode": "H2X",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.5017,
              "longitude": -73.5673
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })
        }}
      />
      <HomeClient />
    </>
  );
}
