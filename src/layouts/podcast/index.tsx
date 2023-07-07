import { Link } from 'react-router-dom';

import { createPodcastAdapter } from '@/adapters/podcast.adapter';
import usePodcasts from '@/hooks/usePodcasts';
import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

interface Props {
  podcastId: string;
  children: React.ReactNode;
}

const PodcastLayout = ({ podcastId, children }: Props) => {
  const { data: podcasts } = usePodcasts();

  const matchingPodcast = podcasts.find((podcast: Podcast) => {
    const mappedPodcast = createPodcastAdapter(podcast);

    return mappedPodcast.id === podcastId;
  });

  const podcastInfo = createPodcastAdapter(matchingPodcast);

  return (
    <>
      <Styled.Container>
        <Styled.PodcastInfo>
          <Link to={`/podcast/${podcastId}`}>
            <Styled.PodcastImage
              src={podcastInfo.image}
              alt={podcastInfo?.title}
            />
            <Styled.PodcastTitle>{podcastInfo?.title}</Styled.PodcastTitle>
          </Link>
          <Styled.PodcastAuthor>By {podcastInfo.author}</Styled.PodcastAuthor>
          <Styled.PodcastDescription>
            <span> Description:</span>
            {podcastInfo?.description}
          </Styled.PodcastDescription>
        </Styled.PodcastInfo>
        {children}
      </Styled.Container>
    </>
  );
};

export default PodcastLayout;
