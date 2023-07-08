import { css } from 'styled-components';

import { grayColor } from './variables';

export const DropShadowBox = css`
  border: 1px solid ${grayColor};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

export const FitContent = css`
  block-size: fit-content;
`;
