import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { createPodcastAdapter } from '@/adapters/podcast.adapter';
import { Podcast } from '@/models/podcast';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Podcast>(
  '/us/rss/toppodcasts/limit=100/genre=1310/json',
);

const filterPodcasts = (searchTerm?: string, data?: any) => {
  const podcasts = data.feed.entry;

  if (!searchTerm) {
    return podcasts;
  }

  const filteredPodcasts = podcasts.filter((podcast: Podcast) => {
    const { title, author } = createPodcastAdapter(podcast);
    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    return (
      title.toLowerCase().includes(lowerCasedSearchTerm) ||
      author.toLowerCase().includes(lowerCasedSearchTerm)
    );
  });

  return filteredPodcasts;
};

const usePodcasts = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['podcasts'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    select: podcasts => filterPodcasts(searchTerm, podcasts),
  });
};

export default usePodcasts;
