import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import { products as mockedProducts } from '../data';

const ProductsList = () => {
  const [products, setProducts] = useState(mockedProducts);
  return (
    <SafeAreaView style={styles.root}>
      <AppHeader />
      <ScrollView>
        {products.map(item => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  item: {
    height: 90,
  },
  productName: {
    color: '#333',
    padding: 4,
  },
});

export default ProductsList;
