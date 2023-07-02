import { styled } from 'styled-components';

export const CardWrapper = styled.div.attrs({
  className: 'card',
})`
  width: 20%;
  padding: 1rem;
  border: 1px solid #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  text-align: center;
`;

export const CardImage = styled.img.attrs({
  className: 'card__image',
})`
  border-radius: 50%;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const CardTitle = styled.h2.attrs({
  className: 'card__title',
})`
  color: #202020;
  font-size: 0.8rem;
  font-weight: 700; /* bold */
  text-transform: uppercase;
`;

export const CardAuthor = styled.span.attrs({
  className: 'card__author',
})`
  display: block;
  color: #6b7280;
  font-size: 0.8rem;
`;
