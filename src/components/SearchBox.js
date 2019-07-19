import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default class SearchBox extends Component {
  static defaultProps = {
    label: 'Pesquisar',
    placeholder: 'user/repositório',
  };

  state = {
    text: undefined,
  };

  handleTextChange = (text) => {
    const { onSearch } = this.props;

    this.setState({ text });

    if (onSearch)
      onSearch(text);
  };

  render() {
    const { label, placeholder, ...otherProps } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>

        <TextInput 
          style={[styles.label, styles.input]}
          onChangeText={this.handleTextChange} 
          placeholder={placeholder} 
          autoCapitalize="none"
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
    fontSize: 16,
    lineHeight: 19,
    color: '#5D5D5D',
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