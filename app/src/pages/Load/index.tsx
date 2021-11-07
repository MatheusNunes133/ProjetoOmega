import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import play from '../../assets/load/Play-Image_Orange.png';
import logo from '../../assets/logo/logo.png'

const onPressLarnMore = ()=>{
    console.log('Bem vindo')
}


export default function Load(){
    return(
        <>
            <StatusBar barStyle='default' backgroundColor='#FF9B43'/>
            <View style={styles.container} >
                <Image source={logo} style={styles.logo} />
                <Text style={styles.msgBoasVindas}> Seja bem vindo</Text> 
                <TouchableOpacity activeOpacity= {0.4} onPress={onPressLarnMore}>
                    <Image source={play} style={styles.btnPlay} />
                </TouchableOpacity>
            </View>
        </>
    );
}