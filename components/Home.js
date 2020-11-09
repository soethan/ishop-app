import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { products as mockedProducts } from '../data';

const Home = () => {
  const [products, setProducts] = useState(mockedProducts);
  return (
    <ScrollView style={styles.root}>
      <View>
        {products.map(item => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        ))}
        </View>
    </ScrollView>
  );
};
{/* <FlatList data={products} renderItem={itemData => (
  <View style={styles.item}>
    <Text style={styles.productName}>{itemData.item.name}</Text>
  </View>
)}>
</FlatList> */}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  item: {
    height: 90,
  },
  productName: {
    color: 'yellow',
    padding: 4,
  },
});

export default Home;
