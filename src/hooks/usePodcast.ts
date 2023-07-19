/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { PodcastDetail } from '@/models/podcast';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<PodcastDetail>(
  import.meta.env.VITE_ITUNES_PODCAST_LOOKUP_URL,
);

const usePodcast = (podcastId: string) => {
  return useQuery({
    queryKey: ['podcastId', podcastId],
    staleTime: ms('24h'),
    queryFn: async () => {
      const podcastResponse = await apiClient.getPodcast(podcastId);
      const podcast = JSON.parse(podcastResponse.contents);

      const feedUrl = podcast.results[0].feedUrl;

      if (feedUrl) {
        const episodes = await apiClient.getEpisodes(feedUrl);

        return { podcastId, episodes };
      }

      return { podcastId, episodes: [] };
    },
  });
};

export default usePodcast;
