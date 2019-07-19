import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchBox from '../components/SearchBox';

export default class Search extends Component {
  state = {
    searchText: undefined,
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    const { searchText } = this.state;

    return (
      <View style={styles.container}>
        <SearchBox onSearch={this.handleSearch} />

        <Text>Buscando por "{searchText}"</Text>
        <Button title="Ir para tela de detalhe" onPress={() => navigation.navigate('Detail')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
});