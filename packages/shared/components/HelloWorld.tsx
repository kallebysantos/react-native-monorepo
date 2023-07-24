import React from 'react'
import { View, Text } from 'react-native'

export function HelloWorld() {
  return (
    <View style={{ backgroundColor: 'blue' }}>
      <Text style={{ color: 'white', fontSize: 28 }}>
        Hello from Shared HelloWorld!
      </Text>
    </View>
  )
}