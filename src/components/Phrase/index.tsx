import React from 'react';
import * as S from './styles';

interface PhraseProps {
  children: React.ReactNode;
}

export const Phrase: React.FC<PhraseProps> = ({ children }) => (
  <S.Phrase>{children}</S.Phrase>
);
