const ExitIcon = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
        <div
            className={`w-[32px] h-[32px] mr-[15px]
                        ${
                            isDarkMode
                                ? "bg-[url(/faqIcons/exitDarkMode.svg)]"
                                : "bg-[url(/faqIcons/exitLightMode.svg)]"
                        }`}
        />
    );
};

export default ExitIcon;
