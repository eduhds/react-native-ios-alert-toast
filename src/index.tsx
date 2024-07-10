import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  StyleSheet,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-ios-alert-toast' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type IosAlertToastProps = {
  visible: boolean;
  toast: {
    mode: 'alert' | 'banner-pop' | 'banner-slide' | 'hud';
    type: 'complete' | 'error' | 'loading' | 'regular';
    title: string;
    subTitle: string;
  };
};

const ComponentName = 'IosAlertToastView';

const IosAlertToastModuleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<IosAlertToastProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

export const IosAlertToastView = ({ visible, toast }: IosAlertToastProps) => {
  if (!visible) {
    return null;
  }

  return (
    <IosAlertToastModuleView toast={toast} style={StyleSheet.absoluteFill} />
  );
};
