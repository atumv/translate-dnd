import React, { useState } from "react";
import styled from "styled-components";

import Phrase from "./components/Phrase";
import ListenBtn from "./components/ListenBtn";
import AnswerField from "./components/AnswerField";
import WordList from "./components/WordList";
import Word from "./components/Word";
import CheckBtn from "./components/CheckBtn";
import Msg from "./components/Msg";

import "./styles/style.scss";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const App = () => {
  const [phrase] = useState("У моего дяди есть ферма в деревне");
  const [translation] = useState("My uncle has a farm in the village");
  const [answer, setAnswer] = useState<string>("");
  const [correctAnswer] = useState("myunclehasafarminthevillage");
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined);
  const [words] = useState([
    "a",
    "farm",
    "has",
    "in",
    "my",
    "the",
    "uncle",
    "village",
  ]);

  const drag = (e: any): void => {
    e.dataTransfer.setData("text", e.target.id);
  };

  const drop = (e: any): void => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");

    if (e.target.classList.contains('word-list')) {
      const emptyLi = e.target.querySelector("li:empty");
      emptyLi.append(document.getElementById(data));

      setTimeout(() => {
        if (!emptyLi.classList.contains(emptyLi.children[0].id)) {
          const sameClassLi = e.target.querySelector(
            `li._${emptyLi.children[0].id}`
          );
          sameClassLi.append(emptyLi.children[0]);
        }
      }, 1000);
      
    } else if (e.target.classList.contains('list-item')) {
      e.target.append(document.getElementById(data));

      setTimeout(() => {
        if (!e.target.classList.contains(e.target.children[0].id)) {
          const sameClassLi = e.target.parentNode.querySelector(
            `li._${e.target.children[0].id}`
          );
          sameClassLi.append(e.target.children[0]);
        }
      }, 1000);
      
    } else if (e.target.classList.contains('answer-field')) {
      e.target.append(document.getElementById(data));
    }

    setAnswer(e.target.textContent);
    setIsCorrect(undefined);
  };

  const allowDrop = (e: any): void => {
    if (!e.target.classList.contains("word")) {
      e.preventDefault();
    }
  };

  const say = (text: string): void => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };
  
  const playTranslation = () => {
    say(translation);
  };

  const checkAnswer = (): void => {
    if (answer === correctAnswer) {
      setIsCorrect(true);
      playTranslation();
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <StyledApp>
      <Phrase>{phrase}</Phrase>

      <ListenBtn onClick={playTranslation} />

      <AnswerField onDragStart={drag} onDragOver={allowDrop} onDrop={drop} />

      <WordList onDragOver={allowDrop} onDrop={drop}>
        {words.map((word, i) => (
          <Word
            onDragStart={drag}
            onDragOver={allowDrop}
            onDrop={drop}
            draggable={true}
            id={i.toString()}
            key={i.toString()}
          >
            {word}
          </Word>
        ))}
      </WordList>

      <CheckBtn onClick={checkAnswer} />

      {isCorrect === undefined && <Msg color="transparent">&nbsp;</Msg>}
      {isCorrect === true && <Msg color="#2d962d">Правильно ✔️</Msg>}
      {isCorrect === false && <Msg color="#8d120e">Неверно ✖️</Msg>}
    </StyledApp>
  );
};

export default App;
