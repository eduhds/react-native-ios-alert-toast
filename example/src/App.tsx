import * as React from 'react';

import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import { IosAlertToastView } from 'react-native-ios-alert-toast';

export default function App() {
  const [toast, setToast] = React.useState(null);

  const toastModes = ['alert', 'banner-pop', 'banner-slide', 'hud'];

  const toastTypes = ['regular', 'complete', 'error', 'loading'];

  return (
    <SafeAreaView style={styles.container}>
      {toastModes.map((mode) => {
        return toastTypes.map((type) => {
          return (
            <View key={mode + type}>
              <Button
                title={`${mode} ${type}`.toUpperCase()}
                onPress={() => {
                  setToast({ mode, type, title: 'Hello World!', subTitle: '' });
                  setTimeout(() => setToast(null), 2000);
                }}
              />
            </View>
          );
        });
      })}

      <IosAlertToastView visible={!!toast} toast={toast} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
