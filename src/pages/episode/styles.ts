import { styled } from 'styled-components';

import { DropShadowBox, FitContent } from '@/styles/mixins';

export const EpisodeSection = styled.article.attrs({
  className: 'episode-section',
})`
  padding: 1rem;
  ${DropShadowBox}
  ${FitContent}
`;

export const EpisodeTitle = styled.h1.attrs({
  className: 'episode-section__title',
})`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const EpisodeDescription = styled.p.attrs({
  className: 'episode-section__description',
})`
  font-size: 1rem;
  white-space: pre-wrap;
`;
