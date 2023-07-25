import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from Shared HelloWorld!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'blue'},
  title: {color: 'white', fontSize: 28},
});
