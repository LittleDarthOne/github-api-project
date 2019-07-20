import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Text from './Text';

export default function RepoStars({ count = 0, style, onPress }) {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.star}>★</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  count: {
    color: '#000000',
    marginRight: 18,
  },

  star: {
    color: '#252525',
  }
});