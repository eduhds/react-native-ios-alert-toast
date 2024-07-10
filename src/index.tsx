import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  StyleSheet,
  type ViewStyle,
  type StyleProp,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-ios-alert-toast' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

export type IosAlertToastModes =
  | 'alert'
  | 'banner-pop'
  | 'banner-slide'
  | 'hud';

export type IosAlertToastTypes = 'complete' | 'error' | 'loading' | 'regular';

export type IosAlertToastOptions = {
  mode: IosAlertToastModes;
  type: IosAlertToastTypes;
  title: string;
  subTitle?: string;
};

type IosAlertToastModuleProps = {
  toast: IosAlertToastOptions;
  style: StyleProp<ViewStyle>;
};

type IosAlertToastProps = {
  toast: IosAlertToastOptions | null;
};

const ComponentName = 'IosAlertToastView';

const IosAlertToastModuleView =
  Platform.OS !== 'ios'
    ? () => null
    : UIManager.getViewManagerConfig(ComponentName) != null
      ? requireNativeComponent<IosAlertToastModuleProps>(ComponentName)
      : () => {
          throw new Error(LINKING_ERROR);
        };

export const IosAlertToastView: React.FC<IosAlertToastProps> = ({ toast }) => {
  if (Platform.OS !== 'ios') {
    return null;
  }

  if (!toast || !toast.title) {
    return null;
  }

  return (
    <IosAlertToastModuleView toast={toast} style={StyleSheet.absoluteFill} />
  );
};
