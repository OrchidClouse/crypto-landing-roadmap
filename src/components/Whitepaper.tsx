import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import WhitepaperHeader from "./whitepaperComponents/WhitepaperHeader";
import WhitepaperText from "./whitepaperComponents/WhitepaperText";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../App";

const Whitepaper = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ApplicationContext)!;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <WhitepaperHeader setIsDarkMode={setIsDarkMode} />
            <h1
                className="cryptorollOrangeText text-center mt-[60px] mb-[23px]
                           sm:text-[40px] text-[16px]"
            >
                whitepaper
            </h1>
            <WhitepaperText />
            <p
                className={`lg:text-[40px] sm:text-[23px] text-[16px] text-center mt-[60px]
                            lg:leading-[39.56px] sm:leading-[30px] leading-[15.82px]
                            lg:max-w-[1065px] sm:max-w-[80%] max-w-[303px] mx-auto my-[40px]
                            ${isDarkMode ? "cryptorollWhiteText" : "cryptorollDarkText"}`}
            >
                {t("joinUs")}
            </p>
        </>
    );
};

export default Whitepaper;
