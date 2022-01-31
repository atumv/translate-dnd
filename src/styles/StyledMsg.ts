import styled from 'styled-components';

const StyledMsg = styled.p`
  color: ${(props) => props.color};
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 300;
  margin-top: 1.5rem;
  line-height: 1.2;
`;

export default StyledMsg;
