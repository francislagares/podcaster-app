import { styled } from 'styled-components';

import { blueColor, grayColor, whiteColor } from '@/styles/variables';

export const SearchContainer = styled.form.attrs({
  className: 'search-form',
})`
  width: 100%;
  padding-bottom: 6rem;
  display: flex;
  justify-content: end;
`;

export const Search = styled.input.attrs({
  type: 'search',
  placeholder: 'Filter podcasts...',
  className: 'search-form__input',
})`
  padding: 0.75rem 1.25rem;
  display: block;
  border: 1px solid ${grayColor};
  border-radius: 5px;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  color: #6b7280;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
  }
`;

export const ResultsCount = styled.span.attrs({
  className: 'search-form__results-count',
})`
  border-radius: 5px;
  background-color: ${blueColor};
  color: ${whiteColor};
  font-size: 0.9rem;
  line-height: 1.5rem;
  margin-right: 0.5rem;
  padding: 0px 4px;
  height: 1.5rem;
  margin: auto 0.5rem;
`;
