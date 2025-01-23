import { Dispatch, SetStateAction, useContext, useState } from "react";
import { ApplicationContext } from "../../App";
import { assets } from "../../images";
import { setIsDarkModeCookie } from "../../utils/cookieUtils";

const DarkLightModeSwitch = ({
    setIsDarkMode,
    swapBg,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    swapBg?: boolean;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;
    const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);

    const handleToggle = () => {
        setIsDarkMode((prevState) => {
            setIsDarkModeCookie(!prevState);
            return !prevState;
        });

        setTriggerAnimation(true);
        setTimeout(() => setTriggerAnimation(false), 200);
    };

    return (
        <div className="top-[63px] left-[111px]">
            <img
                className={`transition-all delay-[100ms] select-none
                            ${triggerAnimation ? "appear" : ""}
                            sm:w-[35px] sm:h-[35px] w-[31px] h-[31px] 
                            hover:cursor-pointer relative`}
                onClick={handleToggle}
                src={
                    isDarkMode
                        ? assets.icons.sunSwitchMode.darkMode
                        : swapBg
                          ? assets.icons.moonSwitchMode.lightMode
                          : assets.icons.moonSwitchMode.darkMode
                }
                draggable={false}
            />
        </div>
    );
};

export default DarkLightModeSwitch;
