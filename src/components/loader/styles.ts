import styled, { keyframes } from 'styled-components';

import { blueColor } from '@/styles/variables';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const DotLoaderContainer = styled.div.attrs({
  role: 'status',
  className: 'loader-container',
})``;

export const Dot = styled.span.attrs<{ delay: string }>({
  className: 'loader-container__dot',
})`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${blueColor};
  border-radius: 50%;
  margin: 0 2px;
  animation: ${pulseAnimation} 1s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay || '0ms'};
`;
