import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela de busca</Text>
      <Button title="Ir para tela de detalhe" onPress={() => navigation.navigate('Detail')} />
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