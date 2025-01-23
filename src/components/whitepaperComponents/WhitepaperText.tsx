import { useTranslation } from "react-i18next";
import BigParagraph from "./BigParagraph";
import { useContext } from "react";
import { ApplicationContext } from "../../App";
import SubParagraph from "./SubParagraph";

const WhitepaperText = () => {
    const { t } = useTranslation();

    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`mx-auto lg:max-w-[912px] sm:max-w-[80%] max-w-[70%]  
                        sm:text-[20px] text-[14px]
                         ${isDarkMode ? "cryptorollWhiteText" : "cryptorollDarkText"}`}
        >
            <BigParagraph header={t("summary")} text={t("summaryText")} />
            <BigParagraph header={t("intro")} text={t("introText")} />
            <h1 className="sm:mt-[60px] mt-[40px] cryptorollOrangeText">
                {t("keyFeaturesHeader")}
            </h1>
            <SubParagraph header={t("feature1")} text={t("feature1Text")} />
            <SubParagraph header={t("feature2")} text={t("feature2Text")} />
            <SubParagraph header={t("feature3")} text={t("feature3Text")} />
            <SubParagraph header={t("feature4")} text={t("feature4Text")} />
            <SubParagraph header={t("feature5")} text={t("feature5Text")} />
            <h1 className="sm:mt-[60px] mt-[40px] cryptorollOrangeText">
                {t("differentiatorsHeader")}
            </h1>
            <SubParagraph header={t("diff1")} text={t("diff1Text")} />
            <SubParagraph header={t("diff2")} text={t("diff2Text")} />
            <h1 className="sm:mt-[60px] mt-[40px] cryptorollOrangeText">
                {t("roadmapHeader")}
            </h1>
            <SubParagraph header={t("step1")} text={t("step1Text")} />
            <SubParagraph header={t("step2")} text={t("step2Text")} />
            <SubParagraph header={t("step3")} text={t("step3Text")} />
            <SubParagraph header={t("step4")} text={t("step4Text")} />
            <SubParagraph header={t("step5")} text={t("step5Text")} />
            <BigParagraph
                header={t("conclusionHeader")}
                text={t("conclusionText")}
            />
        </div>
    );
};

export default WhitepaperText;
