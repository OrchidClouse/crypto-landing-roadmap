import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderAndParagraph from "./helperComponents/HeaderAndParagraph";

const Nfts = () => {
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
                        header={t("nftsHeader")}
                        text={t("nftsParagraph")}
                    />
                </div>
            </div>
            <div
                className="absolute sm:left-[7%] left-[4%] sm:top-[25%] top-[20%]
                           bg-contain bg-no-repeat
                           bg-[url(/paragraphIcons/shieldWithLock.svg)]
                           xl:w-[80px] xl:h-[80px] md:w-[56px] md:h-[56px] w-[30px] h-[30px]"
            />
            <div
                className="absolute sm:right-[7%] right-[3%] top-[40%] bg-contain bg-no-repeat
                           bg-[url(/paragraphIcons/pictureGallery.svg)]
                           xl:w-[56px] xl:h-[56px] md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            />
            <div
                className="absolute left-[25%] lg:bottom-[-35%] md:bottom-[-44%] sm:bottom-[-17%] bottom-[-15%]
                           bg-[url(/paragraphIcons/heart.svg)] bg-contain bg-no-repeat
                           xl:w-[65px] xl:h-[65px] md:w-[56px] md:h-[56px] w-[30px] h-[30px]"
            />
        </div>
    );
};

export default Nfts;
