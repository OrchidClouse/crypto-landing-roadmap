import { useTranslation } from "react-i18next";

const FirstParagraph = () => {
    const { t } = useTranslation();

    return (
        <div
            className="absolute lg:w-[760px] md:w-[540px] w-[280px]
                        lg:top-[9%] md:top-[6%] top-[8%] 
                        lg:left-[6%] lg:translate-x-0 left-[50%] -translate-x-[50%]
                        md:leading-[31.65px] leading-[15.82px]"
        >
            <div className="text-[#d47b28]">{t("noMinimums")}</div>
            <div>{t("anyTime")}</div>
            <div>{t("noLimits")}</div>
        </div>
    );
};

export default FirstParagraph;
