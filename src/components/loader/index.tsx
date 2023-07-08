import * as Styled from './styles';

interface Props {
  isLoading: boolean;
}

const Loader = ({ isLoading }: Props) => {
  return (
    isLoading && (
      <Styled.DotLoaderContainer>
        <Styled.Dot delay='200ms' />
      </Styled.DotLoaderContainer>
    )
  );
};

export default Loader;
