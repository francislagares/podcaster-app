import { styled } from 'styled-components';

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
  border: 1px solid #f1f1f1;
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
