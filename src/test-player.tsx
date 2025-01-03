import { FunctionalComponent } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { useSignalEffect, useSignal } from '@preact/signals';

const TestPlayer: FunctionalComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = useSignal("");

  useEffect(() => {
    const getHlsUrl = async () => {
      // this is the key issue here, if there is a promise in the useEffect, the test will fail
      const url = await new Promise<string>(resolve => {
        resolve("https://hlsurl.com/");
      });
      console.log("url changed", url);
      hlsUrl.value = url;
    };

    getHlsUrl();
  }, []);

  useSignalEffect(() => {
    console.log("call useSignalEffect with hlsUrl.value", hlsUrl.value);
    videoRef.current!.src = hlsUrl.value;
  });

  return <video data-testid="video-player" ref={videoRef}></video>;
}

export default TestPlayer;