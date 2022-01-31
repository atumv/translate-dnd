import React from 'react';
import StyledAnswerField from '../styles/StyledAnswerField';

interface AnswerFieldProps {
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const AnswerField: React.FC<AnswerFieldProps> = ({
  onDragStart,
  onDragOver,
  onDrop,
}) => (
  <StyledAnswerField
    className="answer-field"
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
  />
);
