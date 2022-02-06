import React, { useState, useEffect } from 'react';

import * as S from './styles';
import { GlobalStyles } from 'styles/GlobalStyles';

import { drag } from 'shared/utils/drag';
import { drop } from 'shared/utils/drop';
import { allowDrop } from 'shared/utils/allowDrop';

import { Phrase } from 'components/Phrase';
import { ListenBtn } from 'components/ListenBtn';
import { AnswerField } from 'components/AnswerField';
import { WordList } from 'components/WordList';
import { CheckBtn } from 'components/CheckBtn';
import { Result } from 'components/Result';

const App: React.FC = () => {
  const apiUrl = 'http://localhost:4000/phrases/1';

  const [phrase, setPhrase] = useState<string>('');
  const [translation, setTranslation] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [words, setWords] = useState<Array<string> | []>([]);

  const getPhrase = async (url: string) => {
    const response = await fetch(url);
    const phrase = await response.json();
    setPhrase(phrase.text);
    setTranslation(phrase.translation);
    setCorrectAnswer(phrase.correctAnswer);
    setWords(phrase.words);
  };

  useEffect(() => {
    getPhrase(apiUrl);
  }, []);

  const playTranslation = (text: string): void => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  const checkAnswer = (): void => {
    if (answer === correctAnswer) {
      setIsCorrect(true);
      playTranslation(translation);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <S.App>
      <GlobalStyles />
      {phrase && <Phrase>{phrase}</Phrase>}
      {translation && (
        <ListenBtn onClick={() => playTranslation(translation)} />
      )}
      {phrase && (
        <AnswerField
          onDragStart={drag}
          onDragOver={allowDrop}
          onDrop={(event) => drop(event, setAnswer, setIsCorrect)}
        />
      )}
      {phrase && (
        <WordList
          words={words}
          onDragStart={drag}
          onDragOver={allowDrop}
          onDrop={(event) => drop(event, setAnswer, setIsCorrect)}
        ></WordList>
      )}
      {phrase && <CheckBtn onClick={checkAnswer} />}
      {phrase && <Result isCorrect={isCorrect} />}
    </S.App>
  );
};

export default App;
