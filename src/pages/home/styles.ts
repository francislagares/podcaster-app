import { styled } from 'styled-components';

import { blueColor, whiteColor } from '@/styles/variables';

export const Container = styled.div.attrs({
  className: 'container',
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ResultsCount = styled.span.attrs({
  className: 'results-count',
})`
  border-radius: 5px;
  background-color: ${blueColor};
  font-size: 0.9rem;
  color: ${whiteColor};
  padding: 1px 3px;
`;
