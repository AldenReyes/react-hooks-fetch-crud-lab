import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questionsData) => setQuestions(questionsData));
  }, []);

  function handleDeleteItem(id) {
    setQuestions(
      questions.filter((question) => {
        return question.id !== id;
      })
    );
  }

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => handleDeleteItem(id));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return (
            <QuestionItem
              key={question.id}
              question={question}
              onDeleteClick={handleDelete}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
