import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text      from './Text';
import Avatar    from './Avatar';
import RepoStars from './RepoStars';

const defaultImage = require('../../assets/temp-avatar.jpg');


export default function RepoInfo({ userAvatar, name, description, stars }) {
  const imageSource = (userAvatar && { uri: userAvatar }) || defaultImage;
  const imageResizeMode = userAvatar ? 'cover' : 'repeat';

  return (
    <View style={styles.container}>
      <Avatar uri={userAvatar} style={styles.avatar} />

      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name} numberOfLines={1}>{name || 'Sem nome'}</Text>
          <RepoStars count={stars} />
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
    alignItems: 'center',
  },

  avatar: {
    marginRight: 16,
  },

  infoContainer: {
    flex: 1,
  },

  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontWeight: '500',
    flex: 1,
  },

});