import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckoutNotLoggedin = () => {
  return (
    <View>
      <Text style={styles.title}>You need to connect to complete your purchase, come on?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
                    LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    marginTop: 346,
    marginLeft: 52,
    fontSize: 16,
    fontWeight: '600',
    width: 271,
    height: 44,
    textAlign: 'center'
  },
  button:{
    marginTop: 16,
    alignSelf: 'center',
    alignItems: 'center',
    width: 136,
    height: 48,
    backgroundColor: '#FF0024', 
    borderRadius: 24, 
    justifyContent: 'center',
  },
  buttonText:{
    fontSize: 16,
    fontWeight: '800',
    color: '#FFF'
  }
   
});
export default CheckoutNotLoggedin;