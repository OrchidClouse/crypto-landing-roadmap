const SearchIcon = ({ isDarkMode }: { isDarkMode: boolean }) => {
    return (
        <div
            className={`w-[32px] h-[32px] mr-[15px]
                        ${
                            isDarkMode
                                ? "bg-[url(/faqIcons/searchIconDarkMode.svg)]"
                                : "bg-[url(/faqIcons/searchIconLightMode.svg)]"
                        }`}
        />
    );
};

export default SearchIcon;
