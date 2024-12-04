import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing"; 
import { LayoutProps } from "@/.next/types/app/[locale]/layout";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const {locale}=await params;
  const t = await getTranslations({ locale, namespace: "General" });

  return {
    title:   t("name") 
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "te")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
