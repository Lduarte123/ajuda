import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


export default function Home(){
    const router = useRouter();

    return(
        <View style={styles.conteiner}>
            <Text>Bem vinde ao aba Home, Amigues</Text>
            <Button title="Sobre o app" onPress={() => router.push('/home/detalhesApp') }></Button>
            
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        flez:1,
        justifyContent:'center',
        alignItems:'center',
    }
})