import { styled } from 'styled-components';

import { DropShadowBox, FitContent } from '@/styles/mixins';
import { blackColor, grayColor } from '@/styles/variables';

export const Container = styled.div.attrs({
  className: 'container-grid',
})`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10%;
  padding: 0.5rem;
`;

export const PodcastInfo = styled.div.attrs({
  className: 'podcast-detail__info',
})`
  ${DropShadowBox}
  text-align: center;
  padding: 1rem;
  ${FitContent}

  a {
    color: ${blackColor};
  }
`;

export const PodcastImage = styled.img.attrs({
  className: 'podcast-detail__info-image',
})``;

export const PodcastTitle = styled.h1.attrs({
  className: 'podcast-detail__info-title',
})`
  font-size: 0.9rem;
  border-top: 1px solid ${grayColor};
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
  border-top: 1px solid ${grayColor};
  padding-top: 1rem;

  span {
    color: ${blackColor};
    display: block;
    text-align: left;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;
