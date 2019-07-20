import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import RepoInfo from '../components/RepoInfo';
import { TitleStyle } from '../components/Title';


export default class Detail extends Component {
  static navigationOptions = {
    title: 'REPOSITÓRIO',
  };

  render() {
    const { navigation } = this.props;
    const repo = navigation.getParam('repo', {});

    return (
      <View style={styles.container}>
        <RepoInfo 
          userAvatar={repo.owner.avatar_url}
          name={repo.name}
          description={repo.description}
          stars={repo.stargazers_count}
        />

        <Tabs repo={repo} />
      </View>
    );
  }
}

function Tab1({ repo }) {
  return (<View><Text>Conteúdo da tab 1: {JSON.stringify(repo)}</Text></View>);
}

function Tab2({ repo }) {
  return (<View><Text>Conteúdo da tab 2: {JSON.stringify(repo)}</Text></View>);
}

function Tab3({ repo }) {
  return (<View><Text>Conteúdo da tab 2: {JSON.stringify(repo)}</Text></View>);
}

function Tabs({ repo }){
  const TabNavigator = createMaterialTopTabNavigator({
    Tab1: {screen: () => <Tab1 repo={repo}/>, navigationOptions: {title: 'ISSUES'}},
    Tab2: {screen: () => <Tab2 repo={repo}/>, navigationOptions: {title: 'PULL REQUESTS'}},
    Tab3: {screen: () => <Tab3 repo={repo}/>, navigationOptions: {title: 'COMMITS'}},
  }, 
  {
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#BBB',
      labelStyle: TitleStyle,
      style: {
        backgroundColor: '#FFF',
        elevation: 0,
      },
    }
  }
  );
  const TabsContainer = createAppContainer(TabNavigator);

  return <TabsContainer />;
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
});