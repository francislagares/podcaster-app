import { styled } from 'styled-components';

export const Heading = styled.h1.attrs({
  className: 'heading',
})`
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.5rem;

  a {
    color: #747bff;
    font-size: 1.2rem;
  }
`;
