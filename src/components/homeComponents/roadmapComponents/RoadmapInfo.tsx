import { useContext } from "react";
import { ApplicationContext } from "../../../App";
import { useTranslation } from "react-i18next";

const RoadmapInfo = ({
    position,
    header,
    date,
    text,
    isUpper,
}: {
    position: { top: number; left: number };
    header: string;
    date: string;
    text: string;
    isUpper: boolean;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;
    const { i18n } = useTranslation();

    return (
        <div
            className="absolute"
            style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
            }}
        >
            <div
                className={`w-[2px] xl:h-[200px] h-[160px] rounded-full
                            ${isDarkMode ? "cryptorollWhiteBg" : "cryptorollBlackBg"}`}
            />
            <div
                className={`absolute xl:left-[21px] left-[10px]
                            ${
                                i18n.language === "en"
                                    ? "xl:w-[450px] w-[223px]"
                                    : "xl:w-[550px] w-[223px]"
                            }
                            ${isUpper ? "top-0" : "bottom-0"}
                            ${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}`}
            >
                <h1 className="xl:text-[40px] text-[16px] xl:leading-[39px] leading-[15.82px]">
                    {header}
                </h1>
                <div className="xl:text-[20px] text-[14px]">{date}</div>
                <p className="monoPtFont xl:text-[1em] text-[12px]">{text}</p>
            </div>
        </div>
    );
};

export default RoadmapInfo;
