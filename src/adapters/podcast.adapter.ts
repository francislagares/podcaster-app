import { Podcast } from '@/models/podcast';

export const createPodcastAdapter = (podcast: any): Podcast => ({
  id: podcast.id.attributes['im:id'],
  title: podcast['im:name'].label,
  author: podcast['im:artist'].label,
  image: podcast['im:image'][2].label,
  description: podcast.summary.label,
});
