import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, FlatList } from 'react-native';

import Text      from '../components/Text';
import SearchBox from '../components/SearchBox';
import Card      from '../components/Card';
import RepoInfo  from '../components/RepoInfo';
import Api       from '../services/Api';

export default class Search extends Component {
  state = {
    repos: [],
    response:'',
  };

  handleSearch = async (searchText) => {
    const response = await Api.get(`/users/${searchText}` );
    console.log(response);
    this.setState({ repos: [...Array(10)] });
  };

  renderEmptyMessage = () => {
    return(
      <Text style={styles.emptyMessage}>Nenhum repositório encontrado</Text>
    );
  };

  extractRepoKey = (repo, index) => `repo-${index}`;

  renderRepoCard = ({ item, index }) => {
    const { navigation } = this.props;

    const name = `Fake ${(index + 1)}`;
    const description = `Descrição do repositório ${name}`;
    const stars = index * 10;

    return(
      <Card style={styles.card} onPress={() => navigation.navigate('Detail')}>
        <RepoInfo 
          userAvatar="https://facebook.github.io/react-native/docs/assets/favicon.png" 
          name={name}
          description={description}
          stars={stars}
        />
      </Card>
    );
  };

  render() {
    const { repos } = this.state;

    return (
      <View style={styles.container}>
        <SearchBox onSearch={this.handleSearch} />
        <FlatList 
          data={repos}
          renderItem={this.renderRepoCard}
          keyExtractor={this.extractRepoKey}
          ListEmptyComponent={this.renderEmptyMessage}
        />
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

  emptyMessage: {
    textAlign: 'center',
    fontStyle: 'italic',
    margin: 24,
  }
});