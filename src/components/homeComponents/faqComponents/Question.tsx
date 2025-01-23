import { useContext, useState } from "react";
import { ApplicationContext } from "../../../App";
import ExitIcon from "./icons/ExitIcon";
import SearchIcon from "./icons/SearchIcon";

const Question = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const { isDarkMode } = useContext(ApplicationContext)!;

    const [isAnswerExpanded, setIsAnswerExpanded] = useState(false);

    return (
        <div className="flex justify-center">
            <div
                className={`md:max-w-[705px] max-w-[93%] md:space-y-[10px] space-y-[20px]
                        ${isDarkMode ? "cryptorollWhiteText" : "cryptorollBlackText"}
                        ${isAnswerExpanded ? "mb-[36px]" : "mb-0"}
                        transition-all duration-[0.4s] ease-in-out`}
            >
                <div
                    className="space-y-[10px] hover:cursor-pointer 
                            md:block flex flex-col items-center"
                >
                    <div
                        className="flex justify-between items-center"
                        onClick={() =>
                            setIsAnswerExpanded((prevState) => !prevState)
                        }
                    >
                        <h1
                            className="lg:text-[20px] md:text-[17px] text-[14px] 
                                       ml-[7px] text-center md:max-w-full max-w-[303px]"
                        >
                            {question}
                        </h1>
                        <div className="md:block hidden">
                            {isAnswerExpanded ? (
                                <ExitIcon isDarkMode={isDarkMode} />
                            ) : (
                                <SearchIcon isDarkMode={isDarkMode} />
                            )}
                        </div>
                    </div>
                    <div
                        className={`h-[1px] md:w-full sm:w-[420px] w-[340px]
                                ${isDarkMode ? "cryptorollWhiteBg" : "cryptorollBlackBg"}`}
                    />
                </div>
                <p
                    className={`monoPtFont leading-[22px] sm:ml-[7px] mx-auto 
                                lg:text-left text-center overflow-hidden
                                ${isAnswerExpanded ? "max-h-[360px]" : "max-h-[0px]"}
                                transition-all duration-[0.4s] ease-in-out
                                md:text-[20px] sm:text-[14px] text-[12px] 
                                md:max-w-full sm:max-w-[400px] max-w-[292px]`}
                >
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default Question;
