import { Dispatch, SetStateAction } from "react";
import DarkLightModeSwitch from "../../buttons/DarkLightModeSwitch";
import SwitchLanguageButton from "../../buttons/SwitchLanguageButton";
import GoToWhitepaperButton from "../../buttons/GoToWhitepaperButton";

const Header = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="pt-[63px] flex sm:justify-between justify-start sm:w-[90%] w-[84%] mx-auto">
            <div className="sm:w-[157px] w-[140px] flex justify-between">
                <DarkLightModeSwitch setIsDarkMode={setIsDarkMode} />
                <SwitchLanguageButton />
            </div>
            <GoToWhitepaperButton />
        </div>
    );
};

export default Header;
