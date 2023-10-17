import React from 'react';
<<<<<<< HEAD
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
=======
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
import { LanguageOption } from './LanguageOption';

export const NotLogged = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
=======
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'}/>
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>My profile</Text>
      </View>
      <View style={styles.subtitleContainer}>
<<<<<<< HEAD
        <Text style={styles.subtitle}>You need to log in to see your details</Text>
=======
        <Text style={styles.subtitle}>
          You need to log in to see your details
        </Text>
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.language}>
        <LanguageOption />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
<<<<<<< HEAD
=======
    backgroundColor: '#F9F9F9'
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  },
  titleContainer: {
    marginTop: 107,
    marginLeft: 16,
    marginRight: 190,
    flexDirection: 'column',
  },
<<<<<<< HEAD
  textTitle:{
=======
  textTitle: {
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
    color: '#000',
    fontSize: 32,
    fontWeight: '800',
  },
  subtitleContainer: {
    marginTop: 83,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 96,
    alignItems: 'center',
  },
  subtitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    width: 136,
    height: 48,
    marginTop: 16,
    borderRadius: 25,
    backgroundColor: '#FF0024',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
<<<<<<< HEAD
    color:'#FFFF' ,
    fontSize: 16,
    fontWeight: '800',
  },
  language: {

  }
});
=======
    color: '#FFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  language: {},
});
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
