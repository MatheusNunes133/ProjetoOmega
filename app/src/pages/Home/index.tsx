import React from "react";
import { View, SafeAreaView, TextInput, Image, TouchableOpacity} from "react-native";

import {styles} from './styles';
import Header from "../../components/Header";
import btnEnviar from '../../assets/btnEnviar/btnEnviar.png'


export default function Home(){
    return(
        <>
            < Header/>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <SafeAreaView style={styles.input}>
                        <TextInput placeholder='Inserir Tarefa...' style={styles.placeholder}/>
                    </SafeAreaView>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image source={btnEnviar} style={styles.btnEnviar} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
