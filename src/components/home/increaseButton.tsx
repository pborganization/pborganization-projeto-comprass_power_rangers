import React from 'react';
<<<<<<< HEAD
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
=======
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../assets/styles/Colors';
>>>>>>> acef90d31156a07de56c9200dc6410ecc28c6ad4

export const IncreaseButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <AntDesign name="plus" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    backgroundColor: 'red',
=======
    backgroundColor: Colors.red_500,
>>>>>>> acef90d31156a07de56c9200dc6410ecc28c6ad4
  },
});
