import { useQuery } from '@tanstack/react-query';

import { PodcastDetail } from '@/models/podcast';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<PodcastDetail>(
  import.meta.env.VITE_ITUNES_PODCAST_LOOKUP_URL,
);

const usePodcast = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcastId', podcastId],
    queryFn: () => apiClient.getOne(podcastId),
  });
};

export default usePodcast;
