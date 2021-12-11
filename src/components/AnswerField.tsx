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
  margin: 1.5rem 0;
`;

type AnswerFieldProps = {
  onDragStart: (e: React.DragEvent<HTMLElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLElement>) => void;
  onDrop: (e: React.DragEvent<HTMLElement>) => void;
};

const AnswerField = (props: AnswerFieldProps) => (
  <StyledAnswerField
    onDragStart={props.onDragStart}
    onDragOver={props.onDragOver}
    onDrop={props.onDrop}
  ></StyledAnswerField>
);

export default AnswerField;
