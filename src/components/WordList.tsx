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
  onDragOver: (e: React.DragEvent<HTMLElement>) => void;
  onDrop: (e: React.DragEvent<HTMLElement>) => void;
  children: React.ReactNode;
};

const WordList = (props: WordListProps) => (
  <StyledWordList onDragOver={props.onDragOver} onDrop={props.onDrop}>
    {props.children}
  </StyledWordList>
);

export default WordList;
