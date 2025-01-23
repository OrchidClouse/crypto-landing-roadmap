import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderAndParagraph from "./helperComponents/HeaderAndParagraph";

const FairAndTransparent = () => {
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
                    header={t("fairAndTransparentHeader")}
                    text={t("fairAndTransparentParagraph")}
                />
            </div>
            <div
                className="absolute left-[9%] sm:bottom-[-5%] bottom-[-13%] bg-contain bg-no-repeat
                            bg-[url(/paragraphIcons/stockUp.svg)] sm:block hidden
                            lg:w-[62px] lg:h-[62px] md:w-[47px] md:h-[47px] w-[30px] h-[30px]"
            />
            <div
                className="absolute right-[9%] sm:top-[24%] top-[100%] bg-contain bg-no-repeat
                           bg-[url(/paragraphIcons/handShake.svg)] 
                           lg:w-[78px] lg:h-[78px] md:w-[55px] md:h-[55px] w-[30px] h-[30px]"
            />
        </div>
    );
};

export default FairAndTransparent;
