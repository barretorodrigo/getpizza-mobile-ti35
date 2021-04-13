import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleAndPrice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width:80,
        height:80,
    },
    card:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 5,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    title:{
        fontSize: 20,
        color: "#e22424",
        fontWeight: "bold",
    },
    price:{
        fontSize: 15,
        color: "#e22424",
        fontWeight: "bold",
    },
});

export default styles;