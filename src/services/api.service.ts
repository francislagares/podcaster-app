import axios from 'axios';

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
      .then(res => res.data);
  };

  public getOne = async (
    id: number | string,
    params = '&media=podcast&entity=podcastEpisode&limit=20',
  ) => {
    return axiosInstance
      .get<T>(this.endpoint + id + params)
      .then(res => res.data);
  };
}

export default ApiService;
