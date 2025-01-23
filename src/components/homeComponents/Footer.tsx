import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ApplicationContext } from "../../App";
import { Link } from "react-router-dom";
import { WHITEPAPER_URL } from "../../constants";

const Footer = () => {
    const { t } = useTranslation();

    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <footer className="h-[30vh] flex flex-col items-center">
            <div
                className={`lg:max-w-[920px] sm:max-w-[600px] max-w-[311px]  text-center
                            ${isDarkMode ? "cryptorollWhiteText" : "cryptorollDarkText"}
                            lg:text-[20px] sm:text-[16px] text-[14px]`}
            >
                <span>{t("footerTextPart1")}</span>
                <Link
                    to={WHITEPAPER_URL}
                    className="cryptorollOrangeText hover:cursor-pointer hover:underline mx-[7px]"
                >
                    {t("whitepaper")}
                </Link>
                <span>{t("footerTextPart2")}</span>
            </div>
            <div className="flex space-x-[40px] mt-[20px]">
                <div
                    className="bg-[url(/socialMediaIcons/twitter.svg)] bg-contain bg-no-repeat
                               md:w-[49px] md:h-[45px] sm:w-[40px] sm:h-[40px] w-[32px] h-[30px]"
                />
                <div
                    className="bg-[url(/socialMediaIcons/telegram.svg)] bg-contain bg-no-repeat
                                md:w-[49px] md:h-[45px] sm:w-[40px] sm:h-[40px] w-[32px] h-[30px]"
                />
                <div
                    className="bg-[url(/socialMediaIcons/vk.svg)] bg-contain bg-no-repeat
                                md:w-[49px] md:h-[45px] sm:w-[40px] sm:h-[40px] w-[32px] h-[30px]"
                />
            </div>
        </footer>
    );
};

export default Footer;
