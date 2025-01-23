import {
    Dispatch,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { ApplicationContext } from "../../../App";
import { assets } from "../../../images";

const ScrollButton = ({
    scrollX,
    setScrollX,
    direction,
    position,
    roadmapBgWidth,
}: {
    scrollX: number;
    setScrollX: Dispatch<SetStateAction<number>>;
    direction: string;
    position: { right: number; bottom: number };
    roadmapBgWidth: number;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleOnClick = () => {
        const amountToScroll = 90;

        if (direction === "right") {
            setScrollX((prevState) =>
                prevState + amountToScroll > roadmapBgWidth - window.innerWidth
                    ? roadmapBgWidth - window.innerWidth
                    : prevState + amountToScroll,
            );
        } else if (direction === "left") {
            setScrollX((prevState) =>
                prevState - amountToScroll < 0 ? 0 : prevState - amountToScroll,
            );
        }
    };

    useEffect(() => {
        if (
            (scrollX <= 0 && direction === "left") ||
            (scrollX >= roadmapBgWidth - window.innerWidth &&
                direction === "right")
        ) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [scrollX]);

    return (
        <div
            className={`absolute
                            xl:w-[50px] xl:h-[50px] w-[35px] h-[35px] bg-contain bg-no-repeat
                            flex justify-end items-center hover:cursor-pointer
                            transition-all duration-[0.3s] ease-in
                            ${showButton ? "block" : "hidden"}
                            ${direction === "right" ? "rotate-[45deg]" : "rotate-[-135deg]"}`}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            onMouseDown={handleOnClick}
            style={{
                right: `${position.right}%`,
                bottom: `${position.bottom}%`,
                backgroundImage: `url(${
                    isDarkMode
                        ? assets.icons.arrow.darkMode
                        : assets.icons.arrow.lightMode
                })`,
            }}
        >
            <div
                className={`
                            ${isDarkMode ? "cryptorollBlackBg" : "cryptorollBlackBg"}
                            ${isButtonHovered ? "opacity-[0.4]" : "opacity-0"}
                            w-[190%] h-[190%] rounded-full absolute
                            left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
                            transition-all duration-[0.2s] ease-in-out`}
            />
        </div>
    );
};

export default ScrollButton;
