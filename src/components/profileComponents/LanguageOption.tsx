import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const LanguageOption = () => {
  return (
    <View style={styles.edits}>
      <Text style={styles.text}>Language</Text>
      <Entypo name='chevron-up' size={24} color='#9B9B9B' style={styles.iconLanguage} />
    </View>
  );
};

const styles = StyleSheet.create({
  edits: {
    paddingVertical: 23,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#B6B6B6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: '#000',
    fontWeight: '700',
  },
  iconLanguage: {
    marginLeft: 246,
  },
});

