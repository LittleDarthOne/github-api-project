import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text} from 'react-native';

import SearchBox from '../components/SearchBox';
import Card      from '../components/Card';
import RepoInfo  from '../components/RepoInfo';
import Api       from '../services/Api';

export default class Search extends Component {
  state = {
    searchText: undefined,
    resp:'',
  };

  handleSearch = async (searchText) => {
    this.setState({ searchText });
    const response = await Api.get(`/users/${searchText}/repos` );
    console.log(response);
    this.setState({resp: response.data});
  };

  

  render() {
    const { searchText, resp } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SearchBox onSearch={this.handleSearch} />

        <Card style={styles.card} onPress={() => navigation.navigate('Detail')}>
          <RepoInfo 
            //userAvatar="https://facebook.github.io/react-native/docs/assets/favicon.png" 
            userAvatar={resp.avatarUrl}
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