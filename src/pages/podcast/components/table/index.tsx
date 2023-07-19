/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { Link } from 'react-router-dom';

import { Episode } from '@/models/episode';
import { formatDate } from '@/utils/dateFormatter';

import * as Styled from './styles';

interface Props {
  podcastId: string | undefined;
  episodes: Episode[] | undefined;
}

const Table = ({ episodes, podcastId }: Props) => {
  console.log(episodes);
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
          <tr key={episode.guid}>
            <Styled.TableData>
              <Link
                to={`/podcast/${podcastId}/episode/${episode.guid}`}
                state={{ episode }}
              >
                {episode.title}{' '}
              </Link>
            </Styled.TableData>

            <Styled.TableData>{formatDate(episode.isoDate)}</Styled.TableData>
            <Styled.TableData>{episode.itunes.duration}</Styled.TableData>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  );
};

export default Table;
