# react-native-ios-alert-toast

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)
![Swift](https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

React Native wrapper for iOS [AlertToast](https://github.com/elai950/AlertToast).

> This library is only for iOS but will not break on Android!
> If you need support for both, there are several libs for that.

<p align="center">
    <img src="./example.gif" style="display: block; margin: auto;" width="180"/>
</p>

## Installation

```sh
npm install react-native-ios-alert-toast
# With yarn
yarn add react-native-ios-alert-toast

cd ios && pod install
```

## Usage

```tsx
import * as React from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';
import {
  IosAlertToastView,
  type IosAlertToastOptions,
} from 'react-native-ios-alert-toast';

export default function App() {
  const [toast, setToast] = React.useState<IosAlertToastOptions | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Show Alert Toast"
        onPress={() => {
          setToast({
            mode: 'alert',
            type: 'regular',
            title: 'Alert Toast',
          });
          setTimeout(() => setToast(null), 2000);
        }}
      />

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

## Credits

- [elai950/AlertToast](https://github.com/elai950/AlertToast)

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
