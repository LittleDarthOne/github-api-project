import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Detail extends Component {
  static navigationOptions = {
    title: 'REPOSITÓRIO',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela de detalhe</Text>
        <Button title="Voltar pra tela de busca" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});