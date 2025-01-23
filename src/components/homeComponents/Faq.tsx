import AnyQuestions from "./faqComponents/AnyQuestions";
import QuestionsAndAnswers from "./faqComponents/QuestionsAndAnswers";

const Faq = () => {
    return (
        <div
            className="flex xl:flex-row xl:justify-around xl:items-start xl:py-[200px] py-[120px]
                        flex-col justify-start items-center"
        >
            <AnyQuestions />
            <QuestionsAndAnswers />
        </div>
    );
};

export default Faq;
