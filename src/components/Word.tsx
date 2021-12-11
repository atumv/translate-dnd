import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";

const slideInRightAnimation = keyframes`${slideInRight}`;

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
  font-family: "Roboto";
  font-weight: 400;
  box-shadow: 0px 2px 1px #d1d147;
  animation: 1s ${slideInRightAnimation};
  cursor: pointer;
`;

type WordProps = {
  onDragStart: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>) => void;
  onDrop: (e: React.DragEvent<HTMLElement>) => void;
  draggable: boolean;
  id: string;
  children: React.ReactNode;
};

const Word = ({ onDragStart, onDragOver, onDrop, draggable, id, children }: WordProps) => (
  <StyledListItem
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
    className={`_${id}`}
  >
    <StyledWord draggable={draggable} id={id} className="word">
      {children}
    </StyledWord>
  </StyledListItem>
);

export default Word;
