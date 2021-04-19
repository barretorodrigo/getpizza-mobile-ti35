import React from 'react';
import Header from '../../components/Header'

const Cart = ({ navigation }) => {
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <>
            <Header type='goBack' action={goBack} />
        </>
    );
}

export default Cart;