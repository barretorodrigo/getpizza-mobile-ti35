import React, { version } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import CartButtons from '../CartButtons';

const FlatListItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <View>
                    <View style={styles.titleAndPrice}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.price}>R$ {item.price}</Text>
                    </View>
                    <Text>{item.description}</Text>

                </View>

                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <CartButtons />
        </View>
    )
}

export default FlatListItem;