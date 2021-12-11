import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInDown } from "react-animations";

const fadeInAnimation = keyframes`${slideInDown}`;

const StyledListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  width: 75px;
  height: 40px;
  border-radius: 50px;
  background: #f3f3f3;
`;

const StyledWord = styled.span`
  list-style-type: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 75px;
  min-height: 40px;
  border-radius: 50px;
  background: #ffff35;
  box-shadow: 0px 2px 1px #d1d147;
  animation: 1s ${fadeInAnimation};

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #fdfd31;
  }
`;

type WordProps = {
  id: string;
  draggable: boolean;
  children: React.ReactNode;
  onDragStart: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>) => void;
  onDrop: (e: React.DragEvent<HTMLElement>) => void;
};

const Word = (props: WordProps) => (
  <StyledListItem
    onDragStart={props.onDragStart}
    onDragOver={props.onDragOver}
    onDrop={props.onDrop}
    className={`_${props.id}`}
  >
    <StyledWord draggable={props.draggable} id={props.id} className="word">
      {props.children}
    </StyledWord>
  </StyledListItem>
);

export default Word;
