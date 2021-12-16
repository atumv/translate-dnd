import React from "react";
import StyledWord from "./styled";

type WordProps = {
  id: string;
  draggable: boolean;
  children: React.ReactNode;
};

const Word: React.FC<WordProps> = ({ id, draggable, children }) => (
  <StyledWord className="word" id={id} draggable={draggable}>
    {children}
  </StyledWord>
);

export default Word;
