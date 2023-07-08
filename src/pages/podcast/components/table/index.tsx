import { Link } from 'react-router-dom';

import { Episode } from '@/models/episode';
import { formatDate } from '@/utils/dateFormatter';
import { formatMilliseconds } from '@/utils/timeFormatter';

import * as Styled from './styles';

interface Props {
  podcastId: string | undefined;
  episodes: Episode[] | undefined;
}

const Table = ({ episodes, podcastId }: Props) => {
  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.TableHeader>Title</Styled.TableHeader>
          <Styled.TableHeader>Date</Styled.TableHeader>
          <Styled.TableHeader>Duration</Styled.TableHeader>
        </tr>
      </thead>
      <tbody>
        {episodes?.map((episode: Episode) => (
          <tr key={episode.trackId}>
            <Styled.TableData>
              <Link
                to={`/podcast/${podcastId}/episode/${episode.trackId}`}
                state={{ episode }}
              >
                {episode.trackName}{' '}
              </Link>
            </Styled.TableData>

            <Styled.TableData>
              {formatDate(episode.releaseDate)}
            </Styled.TableData>
            <Styled.TableData>
              {formatMilliseconds(episode.trackTimeMillis)}
            </Styled.TableData>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  );
};

export default Table;
