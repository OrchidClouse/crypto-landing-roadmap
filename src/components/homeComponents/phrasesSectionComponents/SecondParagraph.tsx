import { useTranslation } from "react-i18next";

const SecondParagraph = () => {
    const { t } = useTranslation();

    return (
        <div
            className="absolute md:w-[540px] w-[226px]
                        lg:top-[26%] md:top-[29%] top-[27.5%]
                        lg:left-[38%] lg:translate-x-0 left-[50%] -translate-x-[50%]
                        md:leading-[31.65px] leading-[15.82px]"
        >
            <div className="flex justify-center md:space-x-[10px] space-x-[4px]">
                <div className="text-[#d47b28]">{t("bonuses")}</div>
                <div>{t("forNft")}</div>
            </div>
            <div>{t("holdingAndMore")}</div>
        </div>
    );
};

export default SecondParagraph;
