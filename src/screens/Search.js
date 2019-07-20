import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchBox from '../components/SearchBox';
import Api       from '../services/Api';

export default class Search extends Component {
  state = {
    searchText: undefined,
    response:'',
  };

  handleSearch = async (searchText) => {
    this.setState({ searchText });
    const response = await Api.get(`/users/${searchText}` );
    console.log(response);
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