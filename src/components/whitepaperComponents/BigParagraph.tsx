const BigParagraph = ({ header, text }: { header: string; text: string }) => {
    return (
        <div className="sm:mt-[60px] mt-[40px]">
            <h1 className="cryptorollOrangeText sm:text-[20px] text-[14px]">
                {header}
            </h1>
            <p className="monoPtFont sm:text-[20px] text-[12px] sm:leading-[19.78px] leading-[13.85px]">
                {text}
            </p>
        </div>
    );
};

export default BigParagraph;
