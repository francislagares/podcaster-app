import { styled } from 'styled-components';

export const Container = styled.div.attrs({
  className: 'podcast-detail',
})`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const PodcastInfo = styled.div.attrs({
  className: 'podcast-detail__info',
})`
  border: 1px solid #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  text-align: center;
  padding: 1rem;
`;

export const PodcastImage = styled.img.attrs({
  className: 'podcast-detail__info-image',
})``;

export const PodcastTitle = styled.h1.attrs({
  className: 'podcast-detail__info-title',
})`
  font-size: 0.9rem;
  border-top: 1px solid #f1f1f1;
  padding-top: 1rem;
  text-align: left;
`;

export const PodcastAuthor = styled.span.attrs({
  className: 'podcast-detail__info-author',
})`
  display: block;
  font-size: 0.9rem;
  text-align: left;
  font-style: italic;
  text-align: left;
`;

export const PodcastDescription = styled.p.attrs({
  className: 'podcast-detail__info-description',
})`
  font-size: 0.9rem;
  text-align: left;
  border-top: 1px solid #f1f1f1;
  padding-top: 1rem;

  span {
    display: block;
    text-align: left;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

export const EpisodesWrapper = styled.div.attrs({
  className: 'podcast-detail__episodes',
})``;

export const EpisodesList = styled.ul.attrs({
  className: 'podcast-detail__episodes-list',
})``;

export const EpisodesCount = styled.div.attrs({
  className: 'podcast-detail__episodes-count',
})``;
