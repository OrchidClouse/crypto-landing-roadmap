import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderAndParagraph from "./helperComponents/HeaderAndParagraph";

const LowerFees = () => {
    const { t } = useTranslation();
    const divRef = useRef(null);
    const [slideRight, setSlideRight] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSlideRight(true);
                    }
                });
            },
            {
                threshold: 0.2,
            },
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    return (
        <div ref={divRef} className="text-center relative">
            <div
                className={`flex flex-col items-center
                            ${slideRight ? "translate-x-0" : "translate-x-[-110%]"}
                            transition-all duration-[1.2s] ease-in-out`}
            >
                <HeaderAndParagraph
                    header={t("lowerFeesheader")}
                    text={t("lowerFeesParagraph")}
                />
            </div>
            <div
                className="absolute sm:left-[10%] sm:top-[25%] left-[5%] top-[100%] 
                           bg-contain bg-no-repeat
                           bg-[url(/paragraphIcons/zeroPersentIcon.svg)]
                           xl:w-[74px] xl:h-[74px] md:w-[50px] md:h-[50px] w-[30px]  h-[30px]"
            />
            <div
                className="absolute sm:right-[12%] sm:top-[-13%] right-[6%] top-[-20%] bg-contain bg-no-repeat 
                           bg-[url(/paragraphIcons/moneyInTheBox.svg)]
                           xl:w-[58px] xl:h-[58px] md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            />
            <div
                className="absolute right-[13%] bottom-[-15%] 
                           bg-[url(/paragraphIcons/cards.svg)] bg-contain bg-no-repeat
                           xl:w-[70px] xl:h-[70px] md:w-[50px] md:h-[50px] md:block hidden"
            />
        </div>
    );
};

export default LowerFees;
