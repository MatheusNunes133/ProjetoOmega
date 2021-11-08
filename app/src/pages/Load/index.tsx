import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import play from '../../assets/load/Play-Image_Orange.png';
import logo from '../../assets/logo/logo.png'



export default function Load({navigation}){

    const entrar = ()=>{
        navigation.reset({
            routes: [{name: "Home"}],
        })
    }

    return(
        <>
            <StatusBar barStyle='default' backgroundColor='#FF9B43'/>
            <View style={styles.container} >
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.nomeLogo}>Your List</Text>
                </View>
                <Text style={styles.msgBoasVindas}> Seja bem vindo</Text> 
                <TouchableOpacity activeOpacity= {0.4} onPress={entrar}>
                    <Image source={play} style={styles.btnPlay} />
                </TouchableOpacity>
            </View>
        </>
    );
}