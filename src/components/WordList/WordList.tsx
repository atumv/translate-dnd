import React from "react";
import StyledWordList from "./styled";

type WordListProps = {
  onDragOver: (e: React.DragEvent<HTMLUListElement>) => void;
  onDrop: (e: React.DragEvent<HTMLUListElement>) => void;
  children: React.ReactNode;
};

const WordList: React.FC<WordListProps> = ({
  onDragOver,
  onDrop,
  children,
}) => (
  <StyledWordList className="word-list" onDragOver={onDragOver} onDrop={onDrop}>
    {children}
  </StyledWordList>
);

export default WordList;
