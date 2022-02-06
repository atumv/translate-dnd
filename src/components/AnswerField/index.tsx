import React from 'react';
import * as S from './styles';

interface AnswerFieldProps {
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const AnswerField: React.FC<AnswerFieldProps> = ({
  onDragStart,
  onDragOver,
  onDrop,
}) => (
  <S.AnswerField
    className="answer-field"
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
  />
);
