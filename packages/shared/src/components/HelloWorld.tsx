import React from 'react';
import {Text, View} from '../lib/nativewind';

export function HelloWorld() {
  return (
    <View className="bg-blue-500 p-4">
      <Text className="text-lg font-bold text-white">
        Hello from Shared HelloWorld!!
      </Text>
    </View>
  );
}
