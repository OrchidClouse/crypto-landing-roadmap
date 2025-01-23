const SubParagraph = ({ header, text }: { header: string; text: string }) => {
    return (
        <div className="monoPtFont sm:leading-[22.42px] leading-[13.85px] mb-[1.4em]">
            <h1 className="underline-thin">{header}</h1>
            <p className="sm:text-[20px] text-[12px]">{text}</p>
        </div>
    );
};

export default SubParagraph;
