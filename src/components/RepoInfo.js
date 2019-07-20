import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';
import Avatar from './Avatar';

const defaultImage = require('../../assets/temp-avatar.jpg');


export default function RepoInfo({ userAvatar, name, description }) {
  const imageSource = (userAvatar && { uri: userAvatar }) || defaultImage;
  const imageResizeMode = userAvatar ? 'cover' : 'repeat';

  return (
    <View style={styles.container}>
      <Avatar uri={userAvatar} style={styles.avatar} />

      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.boldText} numberOfLines={1}>{name || 'Sem nome'}</Text>
        </View>
        <Text numberOfLines={2}>{description || 'Sem descrição'}</Text>
      </View>
    </View>
  );
}

const AVATAR_SIZE = 56;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },

  avatar: {
    marginRight: 16,
  },

  boldText: {
    fontWeight: '500',
  },

});