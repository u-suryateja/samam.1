import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import "./globals.css";
import Homee from "./components/Home";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("HomePage");
  const g = await getTranslations("General");
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <main className="flex flex-col items-center text-center gap-6 w-full">
        <Image
          src="/assets/samam-logo.png"
          alt={`${g("name")} Logo`}
          width={180}
          height={180}
          priority
        />
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-lg text-gray-700">{t("intro")}</p>
        <Link href={"/about"}>{t("intro")}</Link>

        {/* Ensure Homee Component is Centered */}
        <div className="w-full max-w-[1200px] border-t border-gray-300">

        </div>
        <div className="w-full flex justify-center ">
  <Homee />
</div>

      </main>
    </div>
  );
}
