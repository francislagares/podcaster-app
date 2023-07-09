import { useEffect } from 'react';

import Linkify from 'react-linkify';
import { useLocation, useParams } from 'react-router-dom';

import { LOADER_TIMEOUT } from '@/constants/loader';
import { useLoadingContext } from '@/contexts/loading';
import PodcastLayout from '@/layouts/podcast';
import AudioPlayer from '@/pages/episode/components/player';

import * as Styled from './styles';

const Episode = () => {
  const { setLoading } = useLoadingContext();
  const { podcastId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, LOADER_TIMEOUT);
  }, []);

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
