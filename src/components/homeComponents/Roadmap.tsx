import { useTranslation } from "react-i18next";
import RoadmapRoadXdxd from "./roadmapComponents/RoadmapRoadXdxd";
import { useState } from "react";
import ScrollButton from "./roadmapComponents/ScrollButton";

const Roadmap = () => {
    const { t } = useTranslation();
    const [scrollX, setScrollX] = useState(0);

    const isMobile = window.innerWidth <= 1280;

    const roadmapWidth = isMobile ? 1284 : 2289;

    return (
        <div className="xl:h-[910px] h-[730px] overflow-hidden relative mt-[160px]">
            <h1 className="cryptorollOrangeText text-[40px] text-center">
                {t("roadmap")}
            </h1>
            <RoadmapRoadXdxd scrollX={scrollX} roadmapBgLength={roadmapWidth} />
            <ScrollButton
                scrollX={scrollX}
                setScrollX={setScrollX}
                direction="left"
                position={{
                    right: isMobile ? 82 : 95,
                    bottom: isMobile ? 2 : 3,
                }}
                roadmapBgWidth={roadmapWidth}
            />
            <ScrollButton
                scrollX={scrollX}
                setScrollX={setScrollX}
                direction="right"
                position={{
                    right: isMobile ? 10 : 2,
                    bottom: isMobile ? 2 : 3,
                }}
                roadmapBgWidth={roadmapWidth}
            />
        </div>
    );
};

export default Roadmap;
