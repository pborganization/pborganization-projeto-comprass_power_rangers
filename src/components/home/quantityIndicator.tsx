import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IncreaseButton } from './increaseButton';
import { DecreaseButton } from './decreaseButton';
import { useProductStore } from '../../hooks/productStore';

interface QuantityIndicatorProps {
  productId: number;
  increasestyle?: any;
  decreasestyle?: any;
}

export const QuantityIndicator: React.FC<QuantityIndicatorProps> = React.memo(
  ({ productId, increasestyle, decreasestyle }) => {
    const { products, setProductState } = useProductStore();
    const productState = products[productId] || { quantity: 0 };

    const [isUpdating, setIsUpdating] = useState(false);

    const updateQuantityWithDelay = (newQuantity: any) => {
      if (!isUpdating) {
        setIsUpdating(true);

        setProductState(productId, {
          quantity: newQuantity,
        });

        setTimeout(() => {
          setIsUpdating(false);
        }, 1000);
      }
    };

    const increaseQuantity = useCallback(() => {
      updateQuantityWithDelay(productState.quantity + 1);
    }, [productId, productState.quantity, setProductState, isUpdating]);

    const decreaseQuantity = useCallback(() => {
      if (productState.quantity > 0) {
        updateQuantityWithDelay(productState.quantity - 1);
      }
    }, [productId, productState.quantity, setProductState, isUpdating]);

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <DecreaseButton onPress={decreaseQuantity} style={decreasestyle} />
        </View>
        <View style={styles.numberContainer}>
          <Text>{productState.quantity}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <IncreaseButton onPress={increaseQuantity} style={increasestyle} />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    height: '100%',
  },
  numberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: '100%',
  },
});
