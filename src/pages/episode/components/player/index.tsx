import * as Styled from './styles';

interface Props {
  src: string;
}

const AudioPlayer = ({ src }: Props) => {
  return (
    <Styled.AudioPlayerWrapper>
      <Styled.Audio controls>
        <source src={src} type='audio/mp3' />
        Your browser does not support the audio element.
      </Styled.Audio>
    </Styled.AudioPlayerWrapper>
  );
};

export default AudioPlayer;
