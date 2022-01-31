import React from 'react';
import StyledWord from '../styles/StyledWord';

interface WordProps {
  id: string;
  draggable: boolean;
  children: React.ReactNode;
}

export const Word: React.FC<WordProps> = ({ id, draggable, children }) => (
  <StyledWord className="word" id={id} draggable={draggable}>
    {children}
  </StyledWord>
);
