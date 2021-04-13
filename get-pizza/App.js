import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import api from './services';
import FlatListItem from './components/FlatListItem';

const App = () => {

  const [products, setProducts] = useState([]);

  const loadingProducts = async () => {
    const response = await api.get('products');
    setProducts(response);
  }

  useEffect(() => {
    loadingProducts();
    //console.log(products.data)
  }, [products]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={products.data}
        renderItem={({ item }) => <FlatListItem item={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;









