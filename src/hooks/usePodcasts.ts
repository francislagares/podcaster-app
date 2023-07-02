import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Podcast } from '@/models/podcast';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Podcast>(
  '/us/rss/toppodcasts/limit=100/genre=1310/json',
);

const usePodcasts = () =>
  useQuery({
    queryKey: ['podcasts'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default usePodcasts;
