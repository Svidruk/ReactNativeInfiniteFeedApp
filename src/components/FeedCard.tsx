import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface Props {
  author: string;
  imageUrl: string;
}

const FeedCard: React.FC<Props> = ({author, imageUrl}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    margin: 12,
    borderRadius: 12,
    elevation: 5,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: 12,
    paddingLeft: 14,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 12,
  },
  author: {
    fontWeight: 'bold',
    marginTop: 12,
    color: '#fff',
  },
});

export default FeedCard;
