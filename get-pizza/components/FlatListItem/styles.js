import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleAndPrice:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal:5
    },
    image: {
        width:80,
        height:80,
    },
    card:{
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 5,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: '#fff',
        overflow: 'hidden',
        paddingBottom: 10,
        marginHorizontal: 10
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
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
    }
});

export default styles;