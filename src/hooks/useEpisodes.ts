import { useQuery } from '@tanstack/react-query';

import { Episode } from '@/models/episode';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Episode>(
  import.meta.env.VITE_ITUNES_PODCAST_LOOKUP_URL,
);

const useEpisodes = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcastId', podcastId],
    queryFn: () => apiClient.getEpisodes(podcastId),
  });
};

export default useEpisodes;
