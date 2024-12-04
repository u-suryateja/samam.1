// app/page.tsx
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("HomePage");
  const g = await getTranslations("General");
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
      <header className="w-full flex justify-end p-4">
        <a
          href={`/${locale === "en" ? "te" : "en"}`}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          {locale === "en" ? "Switch to Telugu" : "Switch to English"}
        </a>
      </header>
      <main className="flex flex-col items-center text-center gap-6">
        <Image
          src="/assets/samam-logo.png"
          alt={`${g("name")} Logo`}
          width={180}
          height={180}
          priority
        />
        <h1 className="text-2xl  font-bold">{t("title")}</h1>
        <p className="text-lg text-gray-700">{t("intro")}</p>
        <Link href={"/about"}>{t("intro")}</Link>
      </main>
      <footer className="mt-auto p-4 text-sm text-gray-500">
        {t("footer")}
      </footer>
    </div>
  );
}
