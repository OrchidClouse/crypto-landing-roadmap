import { Dispatch, SetStateAction } from "react";
import Header from "./heroSectionComponents/Header";
import CoinWithWriting from "./heroSectionComponents/CoinWithWriting";
import Gradient from "./heroSectionComponents/Gradient";
import BleakSpawner from "./heroSectionComponents/BlueBleakManager";

const Hero = ({
    setIsDarkMode,
}: {
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="h-[100vh] cryptorollBlackBg">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <BleakSpawner />
            </div>
            <Header setIsDarkMode={setIsDarkMode} />
            <CoinWithWriting />
            <Gradient />
        </div>
    );
};

export default Hero;
