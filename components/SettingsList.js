import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import AppHeader from './AppHeader';

const SettingsList = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppHeader title={'iShop - Settings'} />
      <View style={styles.content}>
        <Text>Settings!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SettingsList;
