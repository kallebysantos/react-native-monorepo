import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { HelloWorld } from '@monorepo/shared/components/HelloWorld';
import { Counter } from '@monorepo/shared/components/Counter';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1, ...backgroundStyle }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, color: 'black' }}>
          Hello from mobile app!
        </Text>

        <HelloWorld />

        <Counter />

      </View>
    </SafeAreaView>
  );
}

export default App;
