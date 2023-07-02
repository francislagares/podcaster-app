import { createPodcastAdapter } from '@/adapters/podcast.adapter';
import Card from '@/components/card';
import usePodcasts from '@/hooks/usePodcasts';
import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

const Home = () => {
  const { data, isLoading, error } = usePodcasts();

  if (isLoading) return null;

  if (error) throw error;

  const podcasts = data?.feed.entry;

  return (
    <Styled.Container>
      {podcasts?.map((podcast: Podcast) => {
        const mappedPodcast = createPodcastAdapter(podcast);

        return <Card key={mappedPodcast.id} podcast={mappedPodcast} />;
      })}
    </Styled.Container>
  );
};

export default Home;
