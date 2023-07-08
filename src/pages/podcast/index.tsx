import { useParams } from 'react-router-dom';

import usePodcast from '@/hooks/usePodcast';
import PodcastLayout from '@/layouts/podcast';

import Table from './components/table';
import * as Styled from './styles';

const PodcastDetail = () => {
  const { podcastId } = useParams();

  const { data: podcast, isLoading, error } = usePodcast(podcastId || '');

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <PodcastLayout podcastId={podcastId || ''}>
        <Styled.EpisodesWrapper>
          <Styled.EpisodesCount>
            Episodes: {podcast?.resultCount}
          </Styled.EpisodesCount>
          <Styled.EpisodesList>
            <Table episodes={podcast?.results} podcastId={podcastId} />
          </Styled.EpisodesList>
        </Styled.EpisodesWrapper>
      </PodcastLayout>
    </>
  );
};

export default PodcastDetail;
