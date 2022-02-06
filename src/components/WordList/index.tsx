import React from 'react';
import * as S from './styles';
import { ListItem } from './ListItem';
import { Word } from './Word';

interface WordListProps {
  onDragStart: (event: React.DragEvent<HTMLSpanElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLSpanElement>) => void;
  onDrop: (event: React.DragEvent<HTMLSpanElement>) => void;
  words: string[];
}

export const WordList: React.FC<WordListProps> = ({
  words,
  onDragStart,
  onDragOver,
  onDrop,
}) => (
  <S.WordList
    className="word-list"
    onDragOver={onDragOver}
    onDrop={onDrop}
    onDragStart={onDragStart}
  >
    {words.map((word: string, index: number) => (
      <ListItem
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        id={index.toString()}
        key={index.toString()}
      >
        <Word id={index.toString()} draggable={true}>
          {word}
        </Word>
      </ListItem>
    ))}
  </S.WordList>
);
