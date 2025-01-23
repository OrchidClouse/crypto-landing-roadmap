import FirstParagraph from "./phrasesSectionComponents/FirstParagraph";
import SecondParagraph from "./phrasesSectionComponents/SecondParagraph";
import ThirdParagraph from "./phrasesSectionComponents/ThirdParagraph";
import FourthParagraph from "./phrasesSectionComponents/FourthParagraph";
import FifthParagraph from "./phrasesSectionComponents/FifthParagraph";
import BigScreenParticles from "./phrasesSectionComponents/particleScreenPlacement/BigScreenParticles";
import MediumScreenParticles from "./phrasesSectionComponents/particleScreenPlacement/MediumScreenParticles";
import SmallScreenParticles from "./phrasesSectionComponents/particleScreenPlacement/SmallScreenParticles";

const PhrasesSection = () => {
    return (
        <div className="sm:py-[200px] pt-[180px] pb-[120px] flex justify-center items-center relativei overflow-hidden">
            <div
                className="lg:bg-[url(/phrasesBackground.svg)] bg-[url(/phrasesBackgroundSmall.svg)] 
                           bg-contain bg-no-repeat bg-center
                           lg:w-[1039px] lg:h-[799px] md:w-[768px] md:h-[800px] w-[404px] h-[420px] 
                           relative"
            >
                {window.innerWidth >= 1024 ? (
                    <BigScreenParticles />
                ) : window.innerWidth >= 768 ? (
                    <MediumScreenParticles />
                ) : (
                    <SmallScreenParticles />
                )}
                <div
                    className="md:text-[32px] text-[12px] font-[500] cryptorollWhiteText
                                    text-center leading-[31.65px]"
                >
                    <FirstParagraph />
                    <SecondParagraph />
                    <ThirdParagraph />
                    <FourthParagraph />
                    <FifthParagraph />
                </div>
            </div>
        </div>
    );
};

export default PhrasesSection;
