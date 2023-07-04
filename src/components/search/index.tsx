import * as Styled from './styles';

interface Props {
  count: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange, count }: Props) => {
  return (
    <Styled.SearchContainer>
      <Styled.ResultsCount>{count}</Styled.ResultsCount>
      <Styled.Search value={value} onChange={onChange} />
    </Styled.SearchContainer>
  );
};

export default Search;
