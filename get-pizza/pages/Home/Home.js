import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import api from '../../services';
import FlatListItem from '../../components/FlatListItem';

const Home = ({ navigation }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const goToCart = () => {
        navigation.navigate('Cart');
    }

    const loadingProducts = async () => {
        if (loading) {
            return;
        }
        const response = await api.get('products');
        setProducts(response);
        setLoading(true);
    }

    useEffect(() => {
        loadingProducts();
    }, [products]);

    return (
        <View style={styles.container}>
            <Header action={goToCart} />
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

export default Home;