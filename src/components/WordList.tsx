import React from "react";
import styled from "styled-components";

const StyledWordList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 125px;
  width: 100%;
  max-width: 440px;
`;

type WordListProps = {
  onDragOver: (e: React.DragEvent<HTMLUListElement>) => void;
  onDrop: (e: React.DragEvent<HTMLUListElement>) => void;
  children: React.ReactNode;
};

const WordList = ({ onDragOver, onDrop, children }: WordListProps) => (
  <StyledWordList className="word-list" onDragOver={onDragOver} onDrop={onDrop}>
    {children}
  </StyledWordList>
);

export default WordList;
