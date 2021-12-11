import styled from "styled-components";

const Phrase = styled.h1`
  color: #333333;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 375px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export default Phrase;
