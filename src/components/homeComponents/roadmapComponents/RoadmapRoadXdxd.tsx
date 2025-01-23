import { useContext } from "react";
import { ApplicationContext } from "../../../App";
import RoadmapInfo from "./RoadmapInfo";
import { useTranslation } from "react-i18next";
import { assets } from "../../../images";
// import i18n from "../../../i18n";

const RoadmapRoadXdxd = ({
    scrollX,
    roadmapBgLength,
}: {
    scrollX: number;
    roadmapBgLength: number;
}) => {
    const { t } = useTranslation();
    const { isDarkMode } = useContext(ApplicationContext)!;
    const isMobile = window.innerWidth <= 1280;

    const getBackgroundImage = () => {
        if (isDarkMode) {
            return isMobile
                ? assets.images.roadmap.mobile.darkMode
                : assets.images.roadmap.desktop.darkMode;
        } else {
            return isMobile
                ? assets.images.roadmap.mobile.lightMode
                : assets.images.roadmap.desktop.lightMode;
        }
    };

    return (
        <div className={`xl:mt-[280px]  mt-[200px]`}>
            <div
                className={`h-[419px] relative bg-contain bg-no-repeat
                            transition-transform duration-[0.3s] ease-in-out`}
                style={{
                    width: `${roadmapBgLength}px`,
                    transform: `translateX(-${scrollX}px)`,
                    backgroundImage: `url(${getBackgroundImage()})`,
                }}
            >
                <RoadmapInfo
                    position={{
                        top: isMobile ? -38 : -47.8,
                        left: isMobile ? 8.25 : 12.15,
                    }}
                    header={t("launchNftHeader")}
                    date={t("launchNftDate")}
                    text={t("launchNftText")}
                    isUpper={true}
                />
                <RoadmapInfo
                    position={{
                        top: isMobile ? 55.2 : 64.3,
                        left: isMobile ? 18.73 : 27.66,
                    }}
                    header={t("launchAppHeader")}
                    date={t("launchAppDate")}
                    text={t("launchAppText")}
                    isUpper={false}
                />
                <RoadmapInfo
                    position={{
                        top: isMobile ? -38 : -47.8,
                        left: isMobile ? 29.7 : 43.63,
                    }}
                    header={t("launchStakingHeader")}
                    date={t("launchStakingDate")}
                    text={t("launchStakingText")}
                    isUpper={true}
                />
                <RoadmapInfo
                    position={{
                        top: isMobile ? 55.2 : 64.3,
                        left: isMobile ? 41.35 : 58.45,
                    }}
                    header={t("launchTokenHeader")}
                    date={t("launchTokenDate")}
                    text={t("launchTokenText")}
                    isUpper={false}
                />
                <RoadmapInfo
                    position={{
                        top: isMobile ? -37.8 : -47.6,
                        left: isMobile ? 50.15 : 71.34,
                    }}
                    header={t("tokenListingHeader")}
                    date={t("tokenListingDate")}
                    text={t("tokenListingText")}
                    isUpper={true}
                />
                {isMobile && (
                    <div
                        className={`absolute text-[20px]
                                    ${"left-[70%] w-[300px] text-center top-[30%]"}
                                    ${isDarkMode ? "cryptorollWhiteText" : "cryptorollDarkText"}`}
                    >
                        {t("toBeAnnounced")}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoadmapRoadXdxd;
