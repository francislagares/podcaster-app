import { Link } from 'react-router-dom';

import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

interface Props {
  podcast: Podcast;
}

const Card = ({ podcast }: Props) => {
  console.log(podcast);
  return (
    <>
      <Styled.CardWrapper>
        <Link to={`/podcast/${podcast.id}`}>
          <Styled.CardImage
            src={podcast.image}
            alt={podcast.title}
          ></Styled.CardImage>
          <Styled.CardTitle>{podcast.title}</Styled.CardTitle>
          <Styled.CardAuthor>Author: {podcast.author}</Styled.CardAuthor>
        </Link>
      </Styled.CardWrapper>
    </>
  );
};

export default Card;
