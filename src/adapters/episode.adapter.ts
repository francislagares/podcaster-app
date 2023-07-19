/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Episode } from '@/models/episode';

export const createEpisodeAdapter = (episode: any): Episode => ({
  trackId: episode.guid,
  trackName: episode.title,
  releaseDate: episode.pubDate,
  trackTimeMillis: episode.itunes.duration,
  previewUrl: episode.enclosure.url,
  description: episode.content,
});
