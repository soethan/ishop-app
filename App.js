import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>
        <FontAwesomeIcon style={styles.icon} icon={faBars} />iShop
        </Text>
      </View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    backgroundColor: '#333',
    color: '#fff',
    fontFamily: 'Courier-Bold',
    fontSize: 20,
    height: 25,
    width: '100%',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
