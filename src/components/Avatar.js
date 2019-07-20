import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const defaultImage = require('../../assets/temp-avatar.jpg');


export default function Avatar({ uri, style }) {
  const imageSource = (uri && { uri: uri }) || defaultImage;
  const imageResizeMode = uri ? 'cover' : 'repeat';

  return (
    <View  style={[styles.container, style]}>
      <Image source={imageSource} resizeMode={imageResizeMode} style={styles.image} />
    </View>
  );
}

const AVATAR_SIZE = 56;

const styles = StyleSheet.create({
  container: {
    borderRadius: AVATAR_SIZE/2,
    backgroundColor: '#5D5D5D',
    overflow: 'hidden',
  },

  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
});