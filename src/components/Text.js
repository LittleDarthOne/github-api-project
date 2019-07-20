import React from 'react';
import { StyleSheet, Text } from 'react-native';


export default function CustomText(props) {
  const { style, children, ...otherProps } = props;

  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: '#5D5D5D',
  },
});

export const TextStyle = styles.text;