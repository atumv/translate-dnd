import React from 'react';
import StyledPhrase from '../styles/StyledPhrase';

interface PhraseProps {
  children: React.ReactNode;
}

export const Phrase: React.FC<PhraseProps> = ({ children }) => (
  <StyledPhrase>{children}</StyledPhrase>
);
