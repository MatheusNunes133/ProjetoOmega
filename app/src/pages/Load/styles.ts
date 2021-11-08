import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        flexDirection: 'column',

    },
    containerLogo:{
        flex: 0,
        alignItems:'center',
    },
    msgBoasVindas:{
        color: 'white',
        marginTop: '20%',
        fontSize: 36,
        textShadowColor: '#FF9B43',
        textShadowOffset: { width: 0, height: 0},
        textShadowRadius: 20,
    },
    btnPlay:{
        width:100,
        height: 100,
        marginTop: '25%'
    },
    logo:{
        width: 180,
        height: 180,
        marginTop: '20%',
        borderRadius:20
    },
    nomeLogo:{
        color: 'white',
        marginTop: '3%',
        fontSize: 24,
        textShadowColor: '#FF9B43',
        textShadowOffset: { width: 0, height: 0},
        textShadowRadius: 20,
    }
})