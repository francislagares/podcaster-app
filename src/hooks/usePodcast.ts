import { useQuery } from '@tanstack/react-query';

import { PodcastDetail } from '@/models/podcast';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<PodcastDetail>(
  import.meta.env.VITE_ITUNES_PODCAST_LOOKUP_URL,
);

const usePodcast = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcastId', podcastId],
    queryFn: async () => {
      const podcastResponse = await apiClient.getPodcast(podcastId);
      const podcast = JSON.parse(podcastResponse.contents);

      const feedUrl = podcast.results[0].feedUrl;

      if (feedUrl) {
        const episodes = await apiClient.getEpisodes(feedUrl);

        console.log(episodes);

        return { podcastId, episodes };
      }

      return { podcastId, episodes: [] };
    },
  });
};

/* const usePodcast = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcastId', podcastId],
    queryFn: () => apiClient.getPodcast(podcastId),
  });
};

*/
export default usePodcast;
