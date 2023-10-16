import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const DeliverySection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [delPrice, setDelPrice] = useState(0);

  const handleOptionPress = (option : any) => {
    setSelectedOption(option);
    setDelPrice(15);
  };

  return (
    <View style={styles.delivery}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleOptionPress('FedEx')}>
          <View style={[styles.optionBox, selectedOption === 'FedEx' && styles.selectedOption]}>
            <View style={styles.optionContent}>
              <Image source={require('../../../assets/images/fedex-logo.png')} style={styles.logo} />
              <Text style={styles.optionDate}>2-3 days</Text>
            </View>
            {selectedOption === 'FedEx' && (
              <Feather name="check-circle" size={20} color="green" style={styles.checkIcon} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('USPS')}>
          <View style={[styles.optionBox, selectedOption === 'USPS' && styles.selectedOption]}>
            <View style={styles.optionContent}>
              <Image source={require('../../../assets/images/usps.png')} style={styles.logo} />
              <Text style={styles.optionDate}>2-3 days</Text>
            </View>
            {selectedOption === 'USPS' && (
              <Feather name="check-circle" size={20} color="green" style={styles.checkIcon} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionPress('DHL')}>
          <View style={[styles.optionBox, selectedOption === 'DHL' && styles.selectedOption]}>
            <View style={styles.optionContent}>
              <Image source={require('../../../assets/images/dhl.png')} style={styles.logo}/>
              <Text style={styles.optionDate}>2-3 days</Text>
            </View>
            {selectedOption === 'DHL' && (
              <Feather name="check-circle" size={20} color="green" style={styles.checkIcon} />
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.selectionBar}></View>
      </View>
      <View style={styles.price}>
        <View style={styles.orderContainer}>
          <Text style={styles.order}>Order:</Text>
          <Text style={styles.orderPrice}>112,00 R$</Text>
        </View>
        <View style={styles.DContainer}>
          <Text style={styles.del}>Delivery:</Text>
          <Text style={styles.delPrice}>{delPrice} R$</Text>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summary}>Summary:</Text>
          <Text style={styles.summaryPrice}>{112 + delPrice + ',' + 0 + 0} $</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  delivery: {
    marginBottom: 38
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  optionBox: {
    alignItems: 'center',
    marginTop: 16,
    width: 100,
    height: 72,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    padding: 10,
    elevation: 3,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  optionContent: {
    alignItems: 'center',
    height: 72,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  logo: {
    marginTop: 10
  },
  optionDate: {
    fontSize: 11,
    marginTop: 4,
    color: '#9B9B9B'
  },
  selectedOption: {
    borderBottomColor: 'red',
    borderBottomWidth: 3
  },
  price: {
    marginTop: 30,
    marginLeft: 6
  },
  order: {
    fontSize: 14,
    color: '#9B9B9B'
  },
  orderContainer: {
    flexDirection: 'row'
  },
  orderPrice: {
    color: '#000',
    marginLeft: 223,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'right'
  },
  DContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  del: {
    fontSize: 14,
    color: '#9B9B9B'
  },
  delPrice: {
    color: '#000',
    marginLeft: 240,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'right'
  },
  summaryContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  summary: {
    color: '#9B9B9B',
    fontSize: 16,
    fontWeight: '600'
  },
  summaryPrice: {
    color: '#000',
    marginLeft: 185,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right'
  },
  checkIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  selectionBar: {
    backgroundColor: 'red',
    width: 125,
    marginLeft: 10,
    height: 3,
    position: 'absolute',
    bottom: 0,
  },
});

export default DeliverySection;



