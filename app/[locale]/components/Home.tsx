import { getTranslations } from "next-intl/server";

export default async function Homee() {
    const t = await getTranslations("blog");

    return (
        <div className="w-full flex flex-col items-center p-6">
            <div className="w-full max-w-[1200px] ">
                <h2 className="text-2xl font-bold text-center mb-4 ">{t("name")}</h2>
                <p className="text-lg text-gray-600 leading-relaxed text-left">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{t("intro")}
                </p>
                
                <h2 className="text-2xl font-bold text-center mb-4 ">{t("start")}</h2>
                <p className="text-lg  leading-relaxed text-left">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{t("a")}
                </p>

                <h2 className="text-2xl font-bold text-center mb-4 ">{t("list")}</h2>
                <ol className="list-decimal list-outside pl-6 text-lg  leading-relaxed">
                    <li className="text-left">{t("l1")}</li>
                    <li className="text-left">{t("l2")}</li>
                    <li className="text-left">{t("l3")}</li>
                    <li className="text-left">{t("l4")}</li>
                    <li className="text-left">{t("l5")}</li>
                </ol>

                <h2 className="text-2xl font-bold text-center mb-4 ">{t("goals")}</h2>
                <ol className="list-decimal list-outside pl-6 text-lg  leading-relaxed">
                    <li className="text-left">{t("b1")}</li>
                    <li className="text-left">{t("b2")}</li>
                    <li className="text-left">{t("b3")}</li>
                </ol>

                <h2 className="text-2xl font-bold text-center mb-4 ">{t("end")}</h2>
                <p className="text-lg  leading-relaxed text-left ">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>{t("c")}
                </p>
            </div>
        </div>
    );
}
