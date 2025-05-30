import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function DetalhesApp(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.texto}>Informações sobre o App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:16,
        fontWeight: 'bold'

    }
})