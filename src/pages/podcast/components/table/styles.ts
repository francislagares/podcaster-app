import { styled } from 'styled-components';

import { blueColor, grayColor } from '@/styles/variables';

export const Table = styled.table.attrs({
  className: 'episodes-table',
})`
  width: 100%;
  border-collapse: collapse;

  tbody {
    font-size: 0.9rem;
  }

  tbody tr:nth-child(odd) {
    background-color: ${grayColor};
  }

  tbody tr td:last-child {
    text-align: center;
  }
`;

export const TableHeader = styled.th.attrs({
  className: 'episodes-table-header',
})`
  font-size: 0.9rem;
  padding: 10px;
  text-align: left;
`;

export const TableData = styled.td.attrs({
  className: 'episodes-table-data',
})`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;

  a {
    color: ${blueColor};
  }
`;
