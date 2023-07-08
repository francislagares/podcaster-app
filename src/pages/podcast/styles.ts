import { styled } from 'styled-components';

import { DropShadowBox } from '@/styles/mixins';

export const EpisodesWrapper = styled.div.attrs({
  className: 'podcast-detail__episodes',
})``;

export const EpisodesList = styled.div.attrs({
  className: 'podcast-detail__episodes-list',
})`
  padding: 0.5rem 0.8rem;
  ${DropShadowBox}
`;

export const EpisodesCount = styled.div.attrs({
  className: 'podcast-detail__episodes-count',
})`
  ${DropShadowBox}
  padding: 0.5rem 0.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
