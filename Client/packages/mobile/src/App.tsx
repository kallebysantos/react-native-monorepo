import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {HelloWorld} from '@monoapp/shared/src/components/HelloWorld';
import {PlatformComponent} from '@monoapp/shared/src/components/PlatformComponent';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text className="text-center text-5xl font-bold text-gray-800">
            Welcome to React Native on {Platform.OS}
          </Text>
        </View>

        <View>
          <HelloWorld />

          <PlatformComponent />

          <View className="mt-8 px-6">
            <Text className="text-gray-800">Step One</Text>
            <Text className="text-gray-800">
              Edit <Text className="font-bold">App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
