import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Text, { TextStyle } from './Text';

export default class SearchBox extends Component {
  static defaultProps = {
    label: 'Pesquisar',
    placeholder: 'user/repositório',
  };

  state = {
    text: undefined,
  };


  render() {
    const { label, placeholder, onSearch, ...otherProps } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>

        <TextInput 
          style={[TextStyle, styles.input]}
          onChangeText={(text) => {this.setState({ text });}} 
          placeholder={placeholder} 
          autoCapitalize="none"
          onSubmitEditing={()=> { if (onSearch) onSearch(this.state.text);}}
          {...otherProps} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  label: {
    width: '100%',
    marginBottom: 5,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#7F7F7F',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 5,
  }
});