import type { TypedDictionary } from '../utils.types';

export type VideoWrapperProps = {
  url: string;
  pip?: boolean;
  playing?: boolean;
  controls?: boolean;
  light?: boolean;
  volume?: number;
  muted?: boolean;
  played?: number;
  loaded?: number;
  duration?: number;
  playbackRate?: number;
  loop?: boolean;
  reactPlayerExtendedOptions?: TypedDictionary<unknown>;
  className?: string;
};

export type VideoWrapperComponent = React.FC<VideoWrapperProps>;
