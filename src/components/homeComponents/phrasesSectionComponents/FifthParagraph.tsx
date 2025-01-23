import { useTranslation } from "react-i18next";

const FifthParagraph = () => {
    const { i18n, t } = useTranslation();

    return (
        <div
            className="absolute md:w-[540px] w-[230px]
                        lg:top-[77%] md:top-[79%] top-[81%]
                        lg:left-[13%] lg:translate-x-0 left-[50%] -translate-x-[50%]
                        md:leading-[31.65px] leading-[15.82px]"
        >
            <div>{t("fastService")}</div>
            <div>{i18n.language === "en" && t("withdrawals")}</div>
            <div className="flex justify-center md:space-x-[10px] space-x-[4px]">
                <div>{i18n.language === "ru" && t("withdrawals")}</div>
                <div>{t("with")}</div>
                <div className="text-[#d47b28]">{t("oneClick")}</div>
            </div>
        </div>
    );
};

export default FifthParagraph;
