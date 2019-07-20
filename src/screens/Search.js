import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import { Constants } from 'expo';

import SearchBox from '../components/SearchBox';
import Api       from '../services/Api';
import Card from '../components/Card';

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
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SearchBox onSearch={this.handleSearch} />

        <Card style={styles.card} onPress={() => navigation.navigate('Detail')}>
          <Text>Buscando por "{searchText}"</Text>
        </Card>

        <Card style={styles.card}>
          <Text>Buscando por "{searchText}"</Text>
        </Card>

        <Card style={styles.card}>
          <Text>Buscando por "{searchText}"</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 24 + (Platform.OS === 'ios' ? StatusBar.currentHeight : 20),
  },

  card: {
    marginTop: 24,
  },
});