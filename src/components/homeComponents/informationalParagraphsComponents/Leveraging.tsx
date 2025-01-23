import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderAndParagraph from "./helperComponents/HeaderAndParagraph";

const Leveraging = () => {
    const { t } = useTranslation();
    const [slideLeft, setSlideLeft] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSlideLeft(true);
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
            <div className="overflow-hidden">
                <div
                    className={`flex flex-col items-center
                            ${slideLeft ? "translate-x-0" : "translate-x-[110%]"}
                            transition-all duration-[1.2s] ease-in-out`}
                >
                    <HeaderAndParagraph
                        header={t("leveragingHeader")}
                        text={t("leveragingParagraph")}
                    />
                </div>
            </div>
            <div
                className="absolute sm:left-[9%] left-[5%] sm:top-[30%] top-[13%] bg-contain bg-no-repeat
                            bg-[url(/paragraphIcons/compass.svg)]
                           lg:w-[58px] lg:h-[58px] md:w-[46px] md:h-[46px] w-[30px] h-[30px]"
            />
            <div
                className="absolute right-[9%] bottom-[-20%] 
                           bg-[url(/paragraphIcons/rocket.svg)] bg-contain bg-no-repeat
                           lg:w-[90px] lg:h-[90px] md:w-[60px] md:h-[60px] w-[30px] h-[30px]"
            />
        </div>
    );
};

export default Leveraging;
