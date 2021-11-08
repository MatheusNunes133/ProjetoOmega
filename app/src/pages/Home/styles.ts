import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    containerInput:{
        flex: 0,
        flexDirection: 'row'
    },
    input:{
        flex: 0,
        alignItems: 'flex-start',
        marginTop: '-5%',
        borderWidth: 2,
        borderColor: 'white',
        width:200,
        height: 30,
        color: 'white',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginLeft: '30%'
    },
    placeholder:{
        marginLeft: 5
    },
    btnEnviar:{
        width: 40,
        height: 40,
        marginTop: '-20%',
        marginLeft: '17%',
    }
});