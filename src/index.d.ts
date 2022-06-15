import { VideoJsPlayerOptions } from "video.js";

export interface PannellumPropType {
  width?:	string;
  height?:	string;
  image?:	string;
  haov?:	number;
  vaov?:	number;
  vOffsect?:	number;
  yaw?:	number;
  pitch?:	number;
  hfov?:	number;
  maxHfov?:	number;
  minHfov?:	number;
  maxPitch?:	number;
  minPitch?:	number;
  maxYaw?:	number;
  minYaw?:	number;
  autoRotate?:	number;
  compass?:	boolean;
  title?:	string;
  author?:	string;
  preview?:	string;
  previewTitle?:	string;
  previewAuthor?:	string;
  autoLoad?:	boolean;
  orientationOnByDefault?:	boolean;
  showZoomCtrl?:	boolean;
  doubleClickZoom?:	boolean;
  keyboardZoom?:	boolean;
  disableKeyboardCtrl?:	boolean;
  mouseZoom?:	boolean;
  draggable?:	boolean;
  showFullscreenCtrl?:	boolean;
  showControls?:	boolean;
  onLoad?:	Function;
  onRender?:	Function;
  onError?:	Function;
  onErrorcleared?:	Function;
  onMousedown?:	Function;
  onMouseup?:	Function;
  onTouchstart?:	Function;
  onTouchend?:	Function;
  hotspotDebug?:	boolean;
  children?: React.ReactNode
}

export function Pannellum(props: PannellumPropType): JSX.Element;

export enum PanellumType {
  'cubemap',
  'multires',
  'equirectangular',
}

export enum CrossOriginType {
  'anonymous',
  'use-credentials',
}

export interface PannellumVideoPropType {
  video?:	string;
  loop?:	boolean;
  autoplay?:	boolean;
  controls?:	boolean;
  muted?:	boolean;

  width?:	string;
  height?:	string;
  video?:	string;
  yaw?:	number;
  pitch?:	number;
  hfov?:	number;
  maxHfov?:	number;
  minHfov?:	number;
  maxPitch?:	number;
  minPitch?:	number;
  maxYaw?:	number;
  minYaw?:	number;
  autoRotate?:	number;
  mouseZoom?:	boolean;
  hotspotDebug?:	boolean;

  children?: React.ReactNode;

  // Video JS options
  videoJsConfig?: VideoJsPlayerOptions;

  // Extra pannellum options
  roll?: number;
  haov?: number;
  vaov?: number;
  vOffset?: number;
  autoRotateInactivityDelay?: number;
  autoRotateStopDelay?: any;
  type?: PanellumType;
  northOffset?: number;
  showFullscreenCtrl?: boolean;
  dynamic?: boolean;
  doubleClickZoom?: boolean;
  keyboardZoom?: boolean;
  showZoomCtrl?: boolean;
  autoLoad?: boolean;
  showControls?: boolean;
  orientationOnByDefault?: boolean;
  hotSpotDebug?: boolean;
  backgroundColor: propTypes.any;
  avoidShowingBackground?: boolean;
  animationTimingFunction?: (i: number) => number;
  draggable?: boolean;
  disableKeyboardCtrl?: boolean;
  crossOrigin: CrossOriginType;
  touchPanSpeedCoeffFactor?: number;
}

export function PannellumVideo(props: PannellumVideoPropType): JSX.Element;


export interface PannellumHotspotPropType {
  type:	'info';
  pitch?:	number;
  yaw?:	number;
  text?:	string;
  URL?:	string;
}
export interface PannellumHotspotCustomPropType {
  type: 'custom',
  pitch?:	number;
  yaw?:	number;
  tooltip?:	Function;
  tooltipArg?:	Object;
  handleClick?:	Function;
  handleClickArg?:	Object;
  cssClass?:	string;
}
export namespace Pannellum {
  export function Hotspot(props: PannellumHotspotPropType |  PannellumHotspotCustomPropType): JSX.Element;

}
