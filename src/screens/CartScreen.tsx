import { View, StyleSheet, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CartProductCard } from '../components/Cart/CartProductCard';
import { EmptyCard } from '../components/Cart/EmptyCart';
import { Colors } from '../../assets/styles/Colors';
import { Button } from '../components/Buttons/Button';
import { TotalAmount } from '../components/Cart/TotalAmount';
import { useProductStore } from '../hooks/productStore';
<<<<<<< HEAD
import { ProductType } from '../contexts/productType';
import { fetchProductById } from '../services/fakeStoreAPI';
import { useAmountStore } from '../contexts/useAmountStore';
=======
import { ProductType } from '../interfaces/productType';
import { fetchProductById } from '../services/fakeStoreAPI';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50

export const CartScreen = () => {
  const { products } = useProductStore();
  const [cart, setCart] = useState<ProductType[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchCardProducts() {
      const cartData = await Promise.all(
        Object.entries(products).map(async ([productId, productState]) => {
          const productData = await fetchProductById(productId);
          if (productData) {
            return {
              ...productData,
              quantity: productState,
            };
          }
          return null;
        }),
      );
      const filteredCart = cartData.filter((item) => item !== null);
      setCart(filteredCart);
      const newAmount = calculateAmount(filteredCart);
      setTotalAmount(newAmount);
    }

    fetchCardProducts();
  }, [products]);

  const calculateAmount = (items: ProductType[]) => {
    if (items.length === 0) {
      return 0;
    }
    const totalAmount = items.reduce((total, item) => {
      const quantityObject = products[item.id];
      if (typeof quantityObject === 'object' && 'quantity' in quantityObject) {
        const quantity = quantityObject.quantity;
        if (typeof quantity === 'number') {
          return total + item.price * quantity;
        }
      }
      return total;
    }, 0);

    return totalAmount;
  };

  const handleAmount = async () => {
    try {
      await AsyncStorage.setItem('totalAmount', totalAmount.toString());
      console.log('Valor atual do totalAmount:', totalAmount);
      navigation.navigate('CheckoutScreen');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartProductCard product={item} />}
        ListEmptyComponent={<EmptyCard />}
      />

      <View style={styles.details}>
        <TotalAmount>{totalAmount}.00</TotalAmount>
        <Button onPress={handleAmount}>BUY</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  details: {
    backgroundColor: Colors.white,
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: '20%',
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
