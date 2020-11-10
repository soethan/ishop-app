import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <MaterialCommunityIcons name="menu" size={30} />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>iShop</Text>
      </View>
      <View style={styles.right}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    flex: 1.5,
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AppHeader;
