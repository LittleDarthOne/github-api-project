import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function Title(props) {
  const { style, children, ...otherProps } = props;

  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children && children.toUpperCase()}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#000',
  },
});

export const TitleStyle = styles.text;