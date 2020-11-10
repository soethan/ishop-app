import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppHeader from './AppHeader';
import { products as mockedProducts } from '../data';

const ProductsList = ({ navigation }) => {
  const [products, setProducts] = useState(mockedProducts);
  return (
    <SafeAreaView style={styles.root}>
      <AppHeader title={'iShop - Products'} />
      <ScrollView>
        {products.map(item => (
          <View style={styles.item} key={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { name: item.name })}>
              <Text style={styles.productName}>{item.name}</Text>
            </TouchableOpacity>
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
