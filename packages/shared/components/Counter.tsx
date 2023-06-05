import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(current => current + 1)
  }

  return (
    <View>
      <Text style={styles.text}>{count}</Text>

      <Button title='Click-Me' onPress={increment} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#20232a',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});