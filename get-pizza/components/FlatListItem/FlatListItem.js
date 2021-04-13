import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const FlatListItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <View>
                <View style={styles.titleAndPrice}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>R$ {item.price}</Text>
                </View>
                <Text>{item.description}</Text>
            </View>

            <Image source={{ uri: item.image }} style={styles.image} />

        </View>
    )
}

export default FlatListItem;