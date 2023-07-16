import { useEffect } from 'react';

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
          <Styled.EpisodeTitle>{episode?.title}</Styled.EpisodeTitle>
          <Styled.EpisodeDescription
            dangerouslySetInnerHTML={{
              __html: location.state.episode.content,
            }}
          />
          <AudioPlayer src={episode?.previewUrl} />
        </Styled.EpisodeSection>
      </PodcastLayout>
    </>
  );
};

export default Episode;
