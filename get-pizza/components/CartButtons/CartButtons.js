import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const CartButtons = () => {
    return(
        <View style={styles.container}>
            <View style={styles.qtdButtons}>
                <TouchableOpacity style={styles.btnLeft}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
                <View style={styles.input}>
                    <Text style={styles.inputText}>0</Text>
                </View>
                <TouchableOpacity style={styles.btnRight}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.whiteText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CartButtons;