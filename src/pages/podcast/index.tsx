import { useParams } from 'react-router-dom';

import { createPodcastAdapter } from '@/adapters/podcast.adapter';
import usePodcast from '@/hooks/usePodcast';
import usePodcasts from '@/hooks/usePodcasts';
import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

const PodcastDetail = () => {
  const { podcastId } = useParams();

  const { data: podcasts } = usePodcasts();
  const { data: podcast, isLoading, error } = usePodcast(podcastId!);

  const matchingPodcast = podcasts.find((podcast: Podcast) => {
    const mappedPodcast = createPodcastAdapter(podcast);

    return mappedPodcast.id === podcastId;
  });

  const podcastInfo = createPodcastAdapter(matchingPodcast);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <Styled.Container>
      <Styled.PodcastInfo>
        <Styled.PodcastImage src={podcastInfo.image} alt={podcastInfo?.title} />
        <Styled.PodcastTitle>{podcastInfo?.title}</Styled.PodcastTitle>
        <Styled.PodcastAuthor>By {podcastInfo.author}</Styled.PodcastAuthor>
        <Styled.PodcastDescription>
          <span> Description:</span>
          {podcastInfo?.description}
        </Styled.PodcastDescription>
      </Styled.PodcastInfo>
      {/* <Styled.EpisodesWrapper>
        <Styled.EpisodesCount>
          Episodes: {podcast?.resultCount}
        </Styled.EpisodesCount>
        <Styled.EpisodesList>Podcast Episodes Table</Styled.EpisodesList>
      </Styled.EpisodesWrapper> */}
    </Styled.Container>
  );
};

export default PodcastDetail;
