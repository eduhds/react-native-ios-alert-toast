import * as React from 'react';

import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import {
  IosAlertToastView,
  type IosAlertToastModes,
  type IosAlertToastOptions,
  type IosAlertToastTypes,
} from 'react-native-ios-alert-toast';

export default function App() {
  const [toast, setToast] = React.useState<IosAlertToastOptions | null>(null);

  const toastModes: IosAlertToastModes[] = [
    'alert',
    'banner-pop',
    'banner-slide',
    'hud',
  ];

  const toastTypes: IosAlertToastTypes[] = [
    'regular',
    'complete',
    'error',
    'loading',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {toastModes.map((mode) => {
        return toastTypes.map((type) => {
          return (
            <View key={mode + type}>
              <Button
                title={`${mode} ${type}`.toUpperCase()}
                onPress={() => {
                  setToast({ mode, type, title: 'Hello World!' });
                  setTimeout(() => setToast(null), 2000);
                }}
              />
            </View>
          );
        });
      })}

      <IosAlertToastView toast={toast} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
