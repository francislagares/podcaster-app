import { Link, useParams } from 'react-router-dom';

import usePodcast from '@/hooks/usePodcast';
import PodcastLayout from '@/layouts/podcast';

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
            {podcast?.results.map(episode => {
              const episodeId = episode.trackId;

              return (
                <>
                  <li key={episodeId}>
                    <Link
                      to={`/podcast/${podcastId}/episode/${episodeId}`}
                      state={{ episode }}
                    >
                      {episode.trackName}
                    </Link>
                  </li>
                </>
              );
            })}
          </Styled.EpisodesList>
        </Styled.EpisodesWrapper>
      </PodcastLayout>
    </>
  );
};

export default PodcastDetail;
