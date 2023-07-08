import { styled } from 'styled-components';

import { blueColor, grayColor } from '@/styles/variables';

export const Heading = styled.h1.attrs({
  className: 'heading',
})`
  border-bottom: 1px solid ${grayColor};
  padding-bottom: 0.5rem;

  a {
    color: ${blueColor};
    font-size: 1.2rem;
  }
`;
