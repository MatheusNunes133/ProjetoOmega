import React, {useState} from "react";
import { View, SafeAreaView, TextInput, Image, TouchableOpacity, Text} from "react-native";

import {styles} from './styles';
import Header from "../../components/Header";
import btnEnviar from '../../assets/btnEnviar/btnEnviar.png'


export default function Home(){

    const [tarefas, setTarefas] = useState([1]);

    function addTask(){
        setTarefas([... tarefas, 1]);
    }

    return(
        <>
            < Header/>
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Tarefas ({tarefas.length})</Text>
                </View>
                <View style={styles.containerInput}>
                    <SafeAreaView style={styles.input}>
                        <TextInput placeholder='Inserir Tarefa...' style={styles.placeholder}/>
                    </SafeAreaView>
                    <TouchableOpacity activeOpacity={0.5} onPress={addTask}>
                        <Image source={btnEnviar} style={styles.btnEnviar} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
