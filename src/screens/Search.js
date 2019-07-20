import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import SearchBox from '../components/SearchBox';
import Card      from '../components/Card';
import RepoInfo  from '../components/RepoInfo';
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
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SearchBox onSearch={this.handleSearch} />

        <Card style={styles.card} onPress={() => navigation.navigate('Detail')}>
          <RepoInfo 
            userAvatar="https://facebook.github.io/react-native/docs/assets/favicon.png" 
            name={searchText}
            description={`Descrição do repo ${searchText}`}
          />
        </Card>

        <Card style={styles.card}>
          <RepoInfo 
            name={searchText}
            description={`Descrição do repo ${searchText}`}
          />
        </Card>

        <Card style={styles.card}>
          <RepoInfo />
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