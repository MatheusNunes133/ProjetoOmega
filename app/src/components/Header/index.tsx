import React from "react";
import { View, StatusBar, Image, Text, TouchableOpacity} from "react-native";
import { useState } from "react";

import { styles } from "./styles";
import btnEnviar from '../../assets/btnEnviar/btnEnviar.png'

import logo from '../../assets/logo/logo.png';
import lupa from '../../assets/HeaderHome/lupa.png';
import pontos from '../../assets/HeaderHome/opcoes.png';

export default function Header(){

    const [tarefas, setTarefas] = useState([1]);

    function addTask(){
        setTarefas([... tarefas, 1]);
    }
    
    return(
        <>
            <StatusBar backgroundColor="#FF9B43"/>
            <View style={styles.container}>
                <View style={styles.opcoes}>
                    <Image source={logo} style={styles.logo} />
                    <View style={styles.lupaPonto}>
                        <TouchableOpacity activeOpacity={0.5} /* onPressIn={addTask} */>
                            <Image source={lupa} style={styles.lupa} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={pontos} style={styles.pontos} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Tarefas ({tarefas.length})</Text>
                </View>
            </View>

        </>
    );

}