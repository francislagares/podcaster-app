import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { LOADER_TIMEOUT } from '@/constants/loader';
import { useLoadingContext } from '@/contexts/loading';
import usePodcast from '@/hooks/usePodcast';
import PodcastLayout from '@/layouts/podcast';

import Table from './components/table';
import * as Styled from './styles';

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { setLoading } = useLoadingContext();

  const { data: podcast, isLoading, error } = usePodcast(podcastId || '');
  const episodes = podcast?.episodes?.items;

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, LOADER_TIMEOUT);
  }, []);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <PodcastLayout podcastId={podcastId || ''}>
        <Styled.EpisodesWrapper>
          <Styled.EpisodesCount>
            Episodes: {episodes?.length}
          </Styled.EpisodesCount>
          <Styled.EpisodesList>
            <Table episodes={episodes} podcastId={podcastId} />
          </Styled.EpisodesList>
        </Styled.EpisodesWrapper>
      </PodcastLayout>
    </>
  );
};

export default PodcastDetail;
