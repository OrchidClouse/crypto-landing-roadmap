import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../../App";
import { useTranslation } from "react-i18next";
import { HOME_URL } from "../../constants";

const GoBackButton = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;
    const { t } = useTranslation();

    const [currentBgColor, setCurrentBgColor] = useState<string>(
        isDarkMode ? "cryptorollOrangeBg" : "cryptorollBlackBg",
    );

    const handleMouseEnter = () => {
        if (isDarkMode) {
            setCurrentBgColor("cryptorollOrangeBgBrighter");
        } else {
            setCurrentBgColor("bg-gray-500");
        }
    };

    const handleMouseLeave = () => {
        if (isDarkMode) {
            setCurrentBgColor("cryptorollOrangeBg");
        } else {
            setCurrentBgColor("cryptorollBlackBg");
        }
    };

    useEffect(() => {
        setCurrentBgColor(
            isDarkMode ? "cryptorollOrangeBg" : "cryptorollBlackBg",
        );
    }, [isDarkMode]);

    return (
        <Link
            to={HOME_URL}
            className="hover:cursor-pointer sm:scale-100 scale-[0.9]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`relative w-[120.44px] h-[33.35px] ${currentBgColor}`}
            >
                <div
                    className={`absolute w-[114.88px] h-[5.56px] ${currentBgColor}
                                left-[50%] -translate-x-[50%] top-[-2.5px]`}
                />
                <div
                    className={`absolute w-[114.88px] h-[5.56px] ${currentBgColor}
                                left-[50%] -translate-x-[50%] bottom-[-2.5px]`}
                />
                <div
                    className={`absolute w-[5.56px] h-[27.79px] ${currentBgColor}
                                top-[50%] -translate-y-[50%] left-[-2.5px]`}
                />
                <div
                    className={`absolute w-[5.56px] h-[27.79px] ${currentBgColor}
                                top-[50%] -translate-y-[50%] right-[-2.5px]`}
                />
                <div
                    className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]
                                text-white monoPtFont select-none w-full text-center"
                >
                    {t("goBack")}
                </div>
            </div>
        </Link>
    );
};

export default GoBackButton;
