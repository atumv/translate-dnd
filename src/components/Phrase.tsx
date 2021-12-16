import React from "react";
import StyledPhrase from "../styles/StyledPhrase";

type PhraseProps = {
  children: React.ReactNode;
};

const Phrase: React.FC<PhraseProps> = ({ children }) => (
  <StyledPhrase>{children}</StyledPhrase>
);

export default Phrase;
