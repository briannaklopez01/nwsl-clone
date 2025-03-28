import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer} />
      <View style={styles.centerContainer}>
        <Image style={styles.image} source={require('../assets/images/nwsl_logo-transparent.png')}/>
      </View>
      <View style={styles.rightContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    height: 90,
    paddingHorizontal: 10,
    shadowRadius: 5,
    shadowOpacity: 5,
    shadowColor: 'grey'
  },
    leftContainer: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
   flex: 1,
  },
  image: {
    width: 90,
    height: 130,
  },
});