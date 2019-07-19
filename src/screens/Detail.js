import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Detail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela de detalhe</Text>
      <Button title="Voltar pra tela de busca" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});