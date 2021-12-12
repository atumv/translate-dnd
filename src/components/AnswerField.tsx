import React from "react";
import styled from "styled-components";

const StyledAnswerField = styled.div`
  border: 2px dashed #cdcdcd;
  height: 125px;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

type AnswerFieldProps = {
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
};

const AnswerField = ({ onDragStart, onDragOver, onDrop }: AnswerFieldProps) => (
  <StyledAnswerField
    className="answer-field"
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
  ></StyledAnswerField>
);

export default AnswerField;
