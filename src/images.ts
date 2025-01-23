import moonLightDarkModeSwitch from "/images/moonLightDarkModeSwitch.svg";
import moonLightDarkModeSwitchLightMode from "/images/moonLightDarkModeSwitchLightMode.svg";
import sunLightDarkModeSwitch from "/images/sunLightDarkModeSwitch.svg";
import languageSwitchFrame from "/images/LanguageSwitchFrame.svg";
import languageSwitchFrameDarkMode from "/images/languageSwitchFrameLightMode.svg";
import worldIconDarkMode from "/images/WorldIcon.svg";
import worldIconLightMode from "/images/worldIconLightMode.svg";
import phrasesBigBg from "/phrasesBackground.svg";
import phrasesSmallBg from "/phrasesBackgroundSmall.svg";
import arrowLightMode from "/roadmapImages/arrowLightMode.svg";
import arrowDarkMode from "/roadmapImages/arrowDarkMode.svg";

import desktopRoadmapBgDarkMode from "/roadmapImages/roadmapBg/slimfinalBgDarkTheme.svg";
import desktopRoadmapBgLightMode from "/roadmapImages/roadmapBg/slimFinalBgLightTheme.svg";

import mobileRoadmapDarkMode from "/roadmapImages/roadmapBg/smallerScreesRoadmapBgDarkMode.svg";
import mobileRoadmapLightMode from "/roadmapImages/roadmapBg/smallerScreesRoadmapLightMode.svg";

import faviconDarkTheme from "/favicon/faviconBlackTheme.png";
import faviconLightTheme from "/favicon/faviconWhiteTheme.png";

export const assets = {
    icons: {
        moonSwitchMode: {
            darkMode: moonLightDarkModeSwitch,
            lightMode: moonLightDarkModeSwitchLightMode,
        },
        sunSwitchMode: {
            darkMode: sunLightDarkModeSwitch,
        },
        world: {
            lightMode: worldIconLightMode,
            darkMode: worldIconDarkMode,
        },
        arrow: {
            lightMode: arrowLightMode,
            darkMode: arrowDarkMode,
        },
        favicon: {
            lightMode: faviconLightTheme,
            darkMode: faviconDarkTheme,
        },
    },
    images: {
        switchLanguageFrame: {
            darkMode: languageSwitchFrame,
            lightMode: languageSwitchFrameDarkMode,
        },
        phrasesBg: {
            big: phrasesBigBg,
            small: phrasesSmallBg,
        },
        roadmap: {
            mobile: {
                darkMode: mobileRoadmapDarkMode,
                lightMode: mobileRoadmapLightMode,
            },
            desktop: {
                darkMode: desktopRoadmapBgDarkMode,
                lightMode: desktopRoadmapBgLightMode,
            },
        },
    },
};
