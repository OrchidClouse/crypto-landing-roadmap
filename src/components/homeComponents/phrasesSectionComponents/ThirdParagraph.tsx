import { useTranslation } from "react-i18next";

const ThirdParagraph = () => {
    const { t } = useTranslation();

    return (
        <div
            className="absolute lg:w-auto md:w-[640px] w-[270px]
                        lg:top-[42%] md:top-[44%] top-[45%]
                        lg:left-[13%] lg:translate-x-0 left-[50.5%] -translate-x-[50%]
                        md:leading-[31.65px] leading-[15.82px]"
        >
            <div className="flex justify-center md:space-x-[10px] space-x-[4px]">
                <div className="text-[#d47b28]">{t("revolut")}</div>
                <div>{t("row1")}</div>
            </div>
            <div>{t("row2")}</div>
            <div>{t("row3")}</div>
        </div>
    );
};

export default ThirdParagraph;
