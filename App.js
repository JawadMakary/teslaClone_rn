import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/carItem';
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
