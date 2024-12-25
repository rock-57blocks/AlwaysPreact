import { Fragment, FunctionalComponent } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { useSignalEffect, useSignal, signal } from '@preact/signals';


type MuteButtonProps = {
  isMuted: boolean;
};

const MuteButton: FunctionalComponent<MuteButtonProps> = ({
  isMuted,
}) => {
  useEffect(() => {
    console.log('isMuted', isMuted);
  }, [isMuted]);

  return null;
};

export const muteVideo = signal(false);

const TestPlayer: FunctionalComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useSignalEffect(() => {
    videoRef.current!.muted = muteVideo.value;
    divRef.current!.innerText = muteVideo.value ? 'Muted Should be right' : 'Unmuted is wrong';
  });

  return (
    <Fragment>
      <div>
        <div ref={divRef}></div>
        <video
          data-testid='video-player'
          ref={videoRef}>
        </video>
        <MuteButton
          isMuted={muteVideo.value}
        />
      </div>
    </Fragment>
  );
};

export default TestPlayer;