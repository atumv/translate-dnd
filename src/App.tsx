import React, { useState, useEffect } from 'react';

import { Phrase } from './components/Phrase';
import { ListenBtn } from './components/ListenBtn';
import { AnswerField } from './components/AnswerField';
import { WordList } from './components/WordList';
import { ListItem } from './components/ListItem';
import { Word } from './components/Word';
import { CheckBtn } from './components/CheckBtn';
import { Msg } from './components/Msg';

import GlobalStyles from './styles/global';
import StyledApp from './styles/StyledApp';

const App: React.FC = () => {
  const [phrase, setPhrase] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [words, setWords] = useState<Array<string> | []>([]);

  const getPhrase = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setPhrase(data.text);
    setTranslation(data.translation);
    setCorrectAnswer(data.correctAnswer);
    setWords(data.words);
  };

  useEffect(() => {
    getPhrase('http://localhost:3000/api/phrases/1');
  }, []);

  const drag = (e: any): void => {
    e.dataTransfer.setData('text', e.target.id);
  };

  const drop = (e: any): void => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');

    if (e.target.classList.contains('word-list')) {
      const emptyLi = e.target.querySelector('li:empty');
      emptyLi.append(document.getElementById(data));

      if (!emptyLi.classList.contains(emptyLi.firstElementChild.id)) {
        setTimeout(() => {
          const sameClassLi = e.target.querySelector(
            `li._${emptyLi.firstElementChild.id}`
          );
          sameClassLi.append(emptyLi.firstElementChild);
        }, 1000);
      }
    } else if (e.target.classList.contains('list-item')) {
      e.target.append(document.getElementById(data));
      const word = e.target.querySelector('.word');

      if (!e.target.classList.contains(word.id)) {
        setTimeout(() => {
          const sameClassLi = e.target.parentNode.querySelector(
            `li._${word.id}`
          );
          sameClassLi.append(word);
        }, 1000);
      }
    } else if (e.target.classList.contains('answer-field')) {
      e.target.append(document.getElementById(data));
    }

    setAnswer(e.target.textContent);
    setIsCorrect(null);
  };

  const allowDrop = (e: React.DragEvent<HTMLSpanElement>): void => {
    if (!e.currentTarget.classList.contains('word')) {
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
      {phrase && <Phrase>{phrase}</Phrase>}
      {translation && <ListenBtn onClick={playTranslation} />}
      {phrase && (
        <AnswerField onDragStart={drag} onDragOver={allowDrop} onDrop={drop} />
      )}
      {phrase && (
        <WordList onDragOver={allowDrop} onDrop={drop}>
          {words.map((word: string, idx: number) => (
            <ListItem
              onDragStart={drag}
              onDragOver={allowDrop}
              onDrop={drop}
              id={idx.toString()}
              key={idx.toString()}
            >
              <Word id={idx.toString()} draggable={true}>
                {word}
              </Word>
            </ListItem>
          ))}
        </WordList>
      )}
      {phrase && <CheckBtn onClick={checkAnswer} />}
      {phrase && <Msg isCorrect={isCorrect} />}
      <GlobalStyles />
    </StyledApp>
  );
};

export default App;
