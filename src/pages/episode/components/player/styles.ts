import styled from 'styled-components';

export const AudioPlayerWrapper = styled.div.attrs({
  className: 'episode-player',
})`
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: black;
  width: 100%;
  padding: 5px;
`;

export const Audio = styled.audio.attrs({})`
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  outline: none;
  height: 20px;
`;
