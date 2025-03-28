import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react';
import { Header } from '@/components/Header';
import NwslSchedule from '@/components/NwslSchedule';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.Container}>
      <Header></Header>
      <Text style={styles.title}>Past Games</Text>
      <NwslSchedule></NwslSchedule>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f0f0f0',
    padding: 10
  },
  title: {
    color: '#002D72',
    fontSize: 36,
    fontFamily: 'Monospace',
    padding: 30
  },

});
