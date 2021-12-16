import React from "react";
import StyledWord from "../styles/StyledWord";

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
