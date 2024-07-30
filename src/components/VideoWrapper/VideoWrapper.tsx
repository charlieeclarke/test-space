import type { VideoWrapperComponent } from './types';

/**
 * This component works via https://github.com/cookpete/react-player library.
 */
import { createRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

import styles from './VideoWrapper.module.scss';

const defaultState = {
  url: null,
  pip: false,
  playing: false,
  controls: true,
  light: false, // Set to false to enable video preloading
  volume: 0.8,
  muted: false,
  played: 0,
  loaded: 0,
  duration: 0,
  playbackRate: 1.0,
  loop: false,
};

export const VideoWrapper: VideoWrapperComponent = (initialState) => {
  const [state, setState] = useState({ ...defaultState, ...initialState });
  const { url, pip, playing, controls, light, loop, playbackRate, volume, muted } = state;
  const { className, reactPlayerExtendedOptions } = initialState;
  const ref = createRef();

  const handlePlay = () => {
    //update props to add callback if you need to do something after play action
    setState({ ...state, playing: true });
  };

  return (
    <div className={[styles.videoWrapper, className].join(' ')}>
      <ReactPlayer
        ref={ref}
        className="react-player"
        width="100%"
        height="100%"
        url={url}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onPlay={handlePlay}
        //the list of available callbacks
        // onReady={() => console.log('onReady')}
        // onStart={() => console.log('onStart')}
        // onEnablePIP={handleEnablePIP}
        // onDisablePIP={handleDisablePIP}
        // onPause={handlePause}
        // onBuffer={() => console.log('onBuffer')}
        // onSeek={e => console.log('onSeek', e)}
        // onEnded={handleEnded}
        // onError={e => console.log('onError', e)}
        // onProgress={handleProgress}
        // onDuration={handleDuration}
        {...reactPlayerExtendedOptions}
      />
    </div>
  );
};

export default VideoWrapper;
