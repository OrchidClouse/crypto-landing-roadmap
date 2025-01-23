const HeaderAndParagraph = ({
    header,
    text,
}: {
    header: string;
    text: string;
}) => {
    return (
        <>
            <h1
                className="font-[500] xl:text-[40px] lg:text-[30px] md:text-[24px] text-[16px]
                           max-w-[90%]"
            >
                {header}
            </h1>
            <p
                className="monoPtFont mt-[35px] 
                              xl:max-w-[883px] lg:max-w-[600px] md:max-w-[500px] max-w-[292px]
                              xl:text-[20px] lg:text-[16px] text-[12px]"
            >
                {text}
            </p>
        </>
    );
};

export default HeaderAndParagraph;
