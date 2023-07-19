import { Episode } from './episode';

export interface Podcast {
  id: string;
  image: string;
  title: string;
  author: string;
  description: string;
}

export interface PodcastDetail {
  resultCount: number;
  contents: Episode[];
  results: any;
}
