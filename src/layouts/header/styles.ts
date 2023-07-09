import { styled } from 'styled-components';

import { blueColor, grayColor } from '@/styles/variables';

export const Heading = styled.h1.attrs({
  className: 'heading',
})`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${grayColor};
  padding-bottom: 0.5rem;
  height: 1.2rem;

  a {
    color: ${blueColor};
    font-size: 1.2rem;
  }
`;
