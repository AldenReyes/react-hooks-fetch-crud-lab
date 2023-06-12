import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questionsData) => setQuestions(questionsData));
  }, []);

  // const handleAddQuestion(question) {
  //   setQuestions(...questions, question)
  // }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return <QuestionItem key={question.id} question={question} />;
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
