import React from 'react';
import * as S from './styles';

interface WordProps {
  id: string;
  draggable: boolean;
  children: React.ReactNode;
}

export const Word: React.FC<WordProps> = ({ id, draggable, children }) => (
  <S.Word className="word" id={id} draggable={draggable}>
    {children}
  </S.Word>
);
