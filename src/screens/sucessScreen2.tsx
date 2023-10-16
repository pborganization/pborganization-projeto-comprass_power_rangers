import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const SuccessScreen2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bags.jpg')} 
        style={styles.image}
      />
      <Text style={styles.tit}>Sucess!</Text>
      <Text style={styles.text}>Your order will be delivered soon. Thank you for choosing our app!</Text>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continue}>CONTNUE SHOPPING</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 209,
    width: 208, 
    height: 213, 
    resizeMode: 'contain', 
  },
  tit: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    marginTop: 20,
    width: 132,
    height: 44
  },
  text: {
    color: '#000',
    marginTop: 16,
    textAlign: 'center',
    width: 220,
    height: 42,
    fontSize: 14,
    fontWeight: '400'
  },
  continueButton: {
    backgroundColor: '#FF0024', 
    marginTop: 174,
    width: 343,
    height: 48, 
    borderRadius: 24, 

  },
  continue:{
    color: '#FFF',
    marginTop: 14,
    marginLeft: 100,
    fontSize: 14,
    textAlign: 'center',
    width: 154,
    height: 20,
    fontWeight: '800'

  }
});

export default SuccessScreen2;
