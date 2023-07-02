import { styled } from 'styled-components';

export const Container = styled.div.attrs({
  className: 'container',
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 6rem;
`;
