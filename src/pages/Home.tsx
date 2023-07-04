import { useState } from 'react';

import { createPodcastAdapter } from '@/adapters/podcast.adapter';
import Card from '@/components/card';
import Search from '@/components/search';
import usePodcasts from '@/hooks/usePodcasts';
import { Podcast } from '@/models/podcast';

import * as Styled from './styles';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: podcasts, isLoading, error } = usePodcasts(searchTerm);

  if (isLoading) return null;

  if (error) throw error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Styled.Container>
      <Search value={searchTerm} onChange={handleChange} />
      {podcasts?.map((podcast: Podcast) => {
        const mappedPodcast = createPodcastAdapter(podcast);

        return <Card key={mappedPodcast.id} podcast={mappedPodcast} />;
      })}
    </Styled.Container>
  );
};

export default Home;
