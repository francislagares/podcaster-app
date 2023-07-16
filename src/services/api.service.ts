import axios from 'axios';
import Parser from 'rss-parser';

export interface FetchResponse<T> {
  feed: {
    entry: T[];
  };
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ITUNES_BASE_URL,
});

class ApiService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getAll = async () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
      .then(res => res.data)
      .catch(error =>
        console.log(
          `Something went wrong while fetching all podcasts: ${error}`,
        ),
      );
  };

  public getPodcast = async (
    id: number | string,
    params = import.meta.env.VITE_ITUNES_PARAMS_URL,
  ) => {
    return axiosInstance
      .get<T>(this.endpoint + id + params)
      .then(res => res.data)
      .catch(error =>
        console.log(
          `Something went wrong while fetching the podcast: ${error}`,
        ),
      );
  };

  public getEpisodes = async (feedUrl: string) => {
    const parser = new Parser();
    const feed = await parser
      .parseURL(feedUrl)
      .catch(error =>
        console.log(
          `Something went wrong while fetching the episodes: ${error}`,
        ),
      );

    return feed;
  };
}

export default ApiService;
