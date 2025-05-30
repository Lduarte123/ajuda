import { View, Text, StyleSheet } from 'react-native';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text>Configurações</Text>
      <Button title="Sobre o app" onPress={() => router.push('/configuracoes/index') }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
