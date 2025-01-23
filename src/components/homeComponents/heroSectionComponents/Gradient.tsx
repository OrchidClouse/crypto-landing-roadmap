import { useContext } from "react";
import { ApplicationContext } from "../../../App";

const Gradient = () => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    return (
        <div>
            <div
                className={`
                            ${
                                isDarkMode
                                    ? "bg-[url(/gradientDarkMode.svg)] bg-cover"
                                    : "bg-[url(/gradientLightMode.svg)] bg-cover"
                            }
                            w-[100%] h-[128px] absolute bottom-0 translate-y-[100%]`}
            ></div>
        </div>
    );
};

export default Gradient;
