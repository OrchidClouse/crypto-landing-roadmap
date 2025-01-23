import { assets } from "../../images";
import { useContext } from "react";
import { ApplicationContext } from "../../App";

const SwitchLanguageButton = ({ swapBg }: { swapBg?: boolean }) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div>
            {
                <div
                    className="relative
                            sm:w-[102px] sm:h-[35px] w-[90.96px] h-[31.21px] bg-contain
                            flex items-center hover:cursor-pointer"
                    style={{
                        backgroundImage:
                            !isDarkMode && swapBg
                                ? `url(${assets.images.switchLanguageFrame.lightMode})`
                                : `url(${assets.images.switchLanguageFrame.darkMode})`,
                    }}
                >
                    <div
                        className={`sm:w-[24px] sm:h-[24px] w-[21.4px] h-[21.4px] 
                                    bg-contain absolute
                                    ${"sm:left-[66px] left-[60px] rotate-[360deg]"}
                                    transition-all duration-[0.5s] ease-out`}
                        style={{
                            backgroundImage:
                                !isDarkMode && swapBg
                                    ? `url(${assets.icons.world.lightMode})`
                                    : `url(${assets.icons.world.darkMode})`,
                        }}
                    />
                    <div
                        className={`absolute monoPtFont select-none sm:text-[1em] text-[12px]
                                   ${"sm:left-[12px] left-[8px]"}
                                   ${!isDarkMode && swapBg ? "cryptorollDarkText" : "cryptorollWhiteText"}
                                   transition-all duration-[0.5s] ease-out`}
                    >
                        ENG
                    </div>
                </div>
            }
        </div>
    );
};

export default SwitchLanguageButton;
