import React from 'react';
import StyledWordList from '../styles/StyledWordList';

interface WordListProps {
  onDragOver: (e: React.DragEvent<HTMLUListElement>) => void;
  onDrop: (e: React.DragEvent<HTMLUListElement>) => void;
  children: React.ReactNode;
}

export const WordList: React.FC<WordListProps> = ({
  onDragOver,
  onDrop,
  children,
}) => (
  <StyledWordList className="word-list" onDragOver={onDragOver} onDrop={onDrop}>
    {children}
  </StyledWordList>
);
