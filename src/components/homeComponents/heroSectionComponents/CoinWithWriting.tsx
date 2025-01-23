import { useTranslation } from "react-i18next";

const CoinWithWriting = () => {
    const { t } = useTranslation();

    return (
        <div
            className="sm:flex-col sm:items-center sm:top-[142px] top-[30%] left-[50%] -translate-x-[50%]
                        sm:flex sm:relative absolute sm:translate-y-0"
        >
            <img
                src="/money.gif"
                alt="something"
                className="sm:w-[382px] w-0 sm:h-[382px] h-0 sm:block hidden"
            />
            <div
                className="cryptorollWhiteText sm:text-[20px] text-[18px] text-center 
                           sm:max-w-[840px] max-w-[460px] relative
                           sm:leading-normal leading-[37px]"
            >
                {t("entryPhrase")}
            </div>
        </div>
    );
};

export default CoinWithWriting;
