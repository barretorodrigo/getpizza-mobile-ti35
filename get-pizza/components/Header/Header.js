import React from 'react';
import { View, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import logo from '../../assets/logo.png';
import styles from './styles';

const GetPizzaHeader = () => {
    return (
        <Header backgroundColor="#131313">
            <View/>
            <Image source={logo} style={styles.logo}/>
            <Icon 
                type='font-awesome'
                color='#fff'
                name='shopping-cart'
            />
        </Header>
    );
}

export default GetPizzaHeader;