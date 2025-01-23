import { useTranslation } from "react-i18next";
import Question from "./Question";

const QuestionsAndAnswers = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Question question={t("question1")} answer={t("question1Answer")} />
            <Question question={t("question2")} answer={t("question2Answer")} />
            <Question question={t("question3")} answer={t("question3Answer")} />
            <Question question={t("question4")} answer={t("question4Answer")} />
            <Question question={t("question6")} answer={t("question6Answer")} />
        </div>
    );
};

export default QuestionsAndAnswers;
