import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

interface Props {
  podcast: Podcast;
}

const Card = ({ podcast }: Props) => {
  return (
    <>
      <Styled.CardWrapper>
        <Styled.CardImage
          src={podcast.image}
          alt={podcast.title}
        ></Styled.CardImage>
        <Styled.CardTitle>{podcast.title}</Styled.CardTitle>
        <Styled.CardAuthor>Author: {podcast.author}</Styled.CardAuthor>
      </Styled.CardWrapper>
    </>
  );
};

export default Card;
