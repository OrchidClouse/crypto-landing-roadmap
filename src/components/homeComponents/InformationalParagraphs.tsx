import { useContext } from "react";
import LowerFees from "./informationalParagraphsComponents/LowerFees";
import { ApplicationContext } from "../../App";
import Nfts from "./informationalParagraphsComponents/Nfts";
import FairAndTransparent from "./informationalParagraphsComponents/FairAndTransparent";
import Leveraging from "./informationalParagraphsComponents/Leveraging";

const InformationalParagraphs = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div
            className={`md:space-y-[140px] space-y-[60px]
                        ${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}`}
        >
            <LowerFees />
            <Nfts />
            <FairAndTransparent />
            <Leveraging />
        </div>
    );
};

export default InformationalParagraphs;
