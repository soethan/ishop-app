import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from './AppHeader';

const ProductDetails = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <AppHeader title={'iShop - Product Details'} prevName="Products" navigation={navigation} />
      <View style={styles.content}>
        <Text>Product Details - {name}!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ProductDetails;
