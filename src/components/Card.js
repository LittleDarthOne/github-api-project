import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';


export default function Card({ style, onPress, children }) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container style={[styles.container, style]} onPress={onPress}>
      { children }
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
});