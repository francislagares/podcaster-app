import * as Styled from './styles';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: Props) => {
  return (
    <Styled.SearchContainer>
      <Styled.Search value={value} onChange={onChange} />
    </Styled.SearchContainer>
  );
};

export default Search;
