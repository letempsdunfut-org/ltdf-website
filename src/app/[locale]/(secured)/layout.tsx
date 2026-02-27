import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { type PropsWithChildren, Suspense } from "react";
import { Provider } from "@/components/ui/provider";
import { routing } from "@/i18n/routing";
import "@fontsource-variable/inter";

type RootLayoutProps = PropsWithChildren<{
  params: Promise<{ locale: string }>;
}>;


export const metadata: Metadata = {
  title: "template",
  description: "Template",
};

export default async function RootLayout(props: Readonly<RootLayoutProps>) {
  const params = await props.params;

  const {
    locale
  } = params;

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
              {children}
            </Suspense>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
