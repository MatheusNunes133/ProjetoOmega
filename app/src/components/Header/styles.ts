import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 0,
        backgroundColor: '#FF9B43',
        height: 176,
        flexDirection: 'column',
    },
    opcoes:{
        flex:0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10

    },
    lupaPonto:{
        flex: 0,
        flexDirection:"row",
        alignItems: 'center',
    },
    logo:{
        width:80,
        height:80,
        borderWidth: 1.4,
        borderColor: 'black',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    lupa:{
        width:24,
        height:24
    },
    pontos:{
        width:24,
        height: 24,
        marginLeft: 30
    },
    containerTitle:{
        flex: 0,
        alignItems: 'center',
        marginTop: 20
    },
    title:{
        color: 'white',
        fontSize: 25
    }
});