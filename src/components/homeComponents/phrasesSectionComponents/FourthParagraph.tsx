import { useTranslation } from "react-i18next";

const FourthParagraph = () => {
    const { i18n, t } = useTranslation();

    return (
        <div
            className="absolute md:w-[400px] w-[191px] 
                       md:top-[64%] top-[66%]
                       lg:left-[53%] lg:translate-x-0 left-[50%] -translate-x-[50%] 
                       md:leading-[31.65px] leading-[15.82px]"
        >
            <div>
                {t("lowFees")}
                {i18n.language === "en" && t("and")}
            </div>
            <div className="flex justify-center md:space-x-[10px] space-x-[4px]">
                <div>{i18n.language === "ru" && t("and")}</div>
                <div className="text-[#d47b28]">{t("fair")}</div>
                <div>{t("gambling")}</div>
            </div>
        </div>
    );
};

export default FourthParagraph;
