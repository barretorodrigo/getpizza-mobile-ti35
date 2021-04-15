import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    qtdButtons:{
        flexDirection: 'row'
    },
    btnLeft:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2
    },
    btnRight:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        elevation:2
    },
    input:{
        width:40,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        elevation:2
    },
    btnText:{
        fontSize:15,
        color:'#fff',
        fontWeight:'bold'
    },
    inputText:{
        fontSize:15,
        fontWeight:'bold'
    },
    addButton:{
        width: 120,
        height: 40,
        backgroundColor: "#f0bf00",
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:7
    },
    whiteText:{
        color:"#fff"
    }

});

export default styles;