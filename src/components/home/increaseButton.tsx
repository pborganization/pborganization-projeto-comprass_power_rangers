import React from 'react';
<<<<<<< HEAD
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
=======
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../assets/styles/Colors';
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50

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
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  },
});
