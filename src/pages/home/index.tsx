import { useEffect, useState } from 'react';

import { createPodcastAdapter } from '@/adapters/podcast.adapter';
import Card from '@/components/card';
import Search from '@/components/search';
import { LOADER_TIMEOUT } from '@/constants/loader';
import { useLoadingContext } from '@/contexts/loading';
import usePodcasts from '@/hooks/usePodcasts';
import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = usePodcasts(searchTerm);
  const { setLoading } = useLoadingContext();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, LOADER_TIMEOUT);
  }, []);

  if (isLoading) return 'Wait while we are fetching content...';

  if (error) throw error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const podcasts = data?.feed?.entry;

  return (
    <Styled.Container>
      <Search
        count={podcasts.length}
        value={searchTerm}
        onChange={handleChange}
      />
      {podcasts?.map((podcast: Podcast) => {
        const mappedPodcast = createPodcastAdapter(podcast);

        return <Card key={mappedPodcast.id} podcast={mappedPodcast} />;
      })}
    </Styled.Container>
  );
};

export default Home;
