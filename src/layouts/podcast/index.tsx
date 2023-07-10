import Linkify from 'react-linkify';
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
  const { data } = usePodcasts();

  const podcasts = data?.feed?.entry;

  const matchingPodcast = podcasts?.find((podcast: Podcast) => {
    const mappedPodcast = createPodcastAdapter(podcast);

    return mappedPodcast?.id === podcastId;
  });

  const podcastInfo = matchingPodcast
    ? createPodcastAdapter(matchingPodcast)
    : null;

  return (
    <>
      <Styled.Container>
        <Styled.PodcastInfo>
          <Link to={`/podcast/${podcastId}`}>
            <Styled.PodcastImage
              src={podcastInfo?.image}
              alt={podcastInfo?.title}
            />
            <Styled.PodcastTitle>{podcastInfo?.title}</Styled.PodcastTitle>
          </Link>
          <Styled.PodcastAuthor>By {podcastInfo?.author}</Styled.PodcastAuthor>
          <Styled.PodcastDescription>
            <span> Description:</span>
            <Linkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <a target='blank' href={decoratedHref} key={key}>
                  {decoratedText}
                </a>
              )}
            >
              {podcastInfo?.description}
            </Linkify>
          </Styled.PodcastDescription>
        </Styled.PodcastInfo>
        {children}
      </Styled.Container>
    </>
  );
};

export default PodcastLayout;
