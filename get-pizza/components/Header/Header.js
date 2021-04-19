import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import logo from '../../assets/logo.png';
import styles from './styles';

const GetPizzaHeader = ({ action, type }) => {

    const [showBadge, setShowBadge] = useState(true);

    if (type === 'goBack') {
        return (
            <Header backgroundColor="#131313">
                <Icon
                    type='font-awesome'
                    color='#fff'
                    name='arrow-left'
                    onPress={action}
                />
                <Image source={logo} style={styles.logo} />
                <View />
            </Header>
        );
    }
    return (
        <Header backgroundColor="#131313">
            <View />
            <Image source={logo} style={styles.logo} />
            <View>
                <Icon
                    type='font-awesome'
                    color='#fff'
                    name='shopping-cart'
                    onPress={action}
                />
                {showBadge ?
                    <Badge
                        status='error'
                        containerStyle={{ position: 'absolute', top: -2, right: -4 }}
                    /> : null}
            </View>
        </Header>
    );
}

export default GetPizzaHeader;