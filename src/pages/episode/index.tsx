import Linkify from 'react-linkify';
import { useLocation, useParams } from 'react-router-dom';

import PodcastLayout from '@/layouts/podcast';
import AudioPlayer from '@/pages/episode/components/player';

import * as Styled from './styles';

const Episode = () => {
  const { podcastId } = useParams();
  const location = useLocation();

  const episode = location?.state?.episode;

  return (
    <>
      <PodcastLayout podcastId={podcastId || ''}>
        <Styled.EpisodeSection>
          <Styled.EpisodeTitle>{episode?.trackName}</Styled.EpisodeTitle>
          <Styled.EpisodeDescription>
            <Linkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <a target='blank' href={decoratedHref} key={key}>
                  {decoratedText}
                </a>
              )}
            >
              {episode?.description}
            </Linkify>
          </Styled.EpisodeDescription>
          <AudioPlayer src={episode?.previewUrl} />
        </Styled.EpisodeSection>
      </PodcastLayout>
    </>
  );
};

export default Episode;
