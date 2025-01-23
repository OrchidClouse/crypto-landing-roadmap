import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../../../App";

const AnyQuestions = () => {
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}`}
        >
            <h1
                className="lg:text-[40px] sm:text-[30px] text-[16px]
                           xl:text-inherit text-[#d47b28] xl:m-auto mb-[20px]"
            >
                {t("anyQuestions")}
            </h1>
            <p className="monoPtFont text-[20px] w-[438px] leading-[22px] xl:block hidden">
                {t("anyQuestionsParagraph")}
            </p>
        </div>
    );
};

export default AnyQuestions;
