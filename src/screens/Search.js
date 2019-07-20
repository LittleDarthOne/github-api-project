import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Text      from '../components/Text';
import SearchBox from '../components/SearchBox';
import Card      from '../components/Card';
import RepoInfo  from '../components/RepoInfo';
import Api       from '../services/Api';


export default class Search extends Component {
  static navigationOptions = {
    title: 'BUSCAR REPOSITÓRIOS',
  };

  state = {
    repos: [],
    response:'',
  };

  handleSearch = async (searchText) => {
    if (searchText.includes('/')){
      const response = await Api.get(`https://api.github.com/repos/${searchText}`);
      this.setState({ repos: [response.data] });
      
    } else {
      const response = await Api.get(`/users/${searchText}/repos` ); 
      this.setState({ repos: response.data });
    }
  };

  renderEmptyMessage = () => {
    return(
      <Text style={styles.emptyMessage}>Nenhum repositório encontrado</Text>
    );
  };

  extractRepoKey = (repo, index) => repo.id;

  renderRepoCard = ({ item, index }) => {
    const { navigation } = this.props;

    return(
      <Card style={styles.card} onPress={() => navigation.navigate('Detail')}>
        <RepoInfo 
          userAvatar={item.owner.avatar_url} 
          name={item.name}
          description={item.description}
          stars={item.stargazers_count}
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