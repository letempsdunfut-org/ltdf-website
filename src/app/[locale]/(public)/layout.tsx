import { NextIntlClientProvider } from "next-intl";
import {
  getMessages, setRequestLocale, getTranslations,
} from "next-intl/server";
import { type PropsWithChildren, Suspense } from "react";
import { Provider } from "@/components/ui/provider";
import { routing } from "@/i18n/routing";
import { TopNavbar } from "@/components/navigation/top-navbar";
import { SiteFooter } from "@/components/navigation/site-footer";
import { GoogleAnalytics } from '@next/third-parties/google';

type RootLayoutProps = PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "common.seo" });

  return {
    title: {
      template: t("titleTemplate"),
      default: t("siteName"),
    },
    description: t("description"),
    metadataBase: new URL("https://letempsdunfut.ca"),
    alternates: {
      canonical: "/",
      languages: {
        "fr-CA": "/fr-CA",
        "en-CA": "/en-CA",
      },
    },
    openGraph: {
      siteName: t("siteName"),
      type: "website",
      locale: locale.replace("-", "_"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout(props: Readonly<RootLayoutProps>) {
  const { locale } = await props.params;

  const {
    children
  } = props;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Provider>
          <NextIntlClientProvider
            messages={messages}
          >
            <Suspense>
              <TopNavbar />
              {children}
              <SiteFooter />
            </Suspense>
          </NextIntlClientProvider>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
        </Provider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
