import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import play from '../../assets/load/Play-Image.png';

const onPressLarnMore = ()=>{
    console.log('Bem vindo')
}


export default function Load(){
    return(
        <>
            <StatusBar barStyle='default' backgroundColor='green'/>
            <View style={styles.container} >
                <Text style={styles.msgBoasVindas}> Seja bem vindo</Text> 
                <TouchableOpacity activeOpacity= {0.4} onPress={onPressLarnMore}>
                    <Image source={play} style={styles.btnPlay} />
                </TouchableOpacity>
            </View>
        </>
    );
}