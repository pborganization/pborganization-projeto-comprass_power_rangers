import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IncreaseButton } from "./increaseButton";
import { DecreaseButton } from "./decreaseButton";
import { useProductStore } from "./Products";

interface QuantityIndicatorProps {
  productId: number;
  increasestyle: any;
  decreasestyle: any;
}

export const QuantityIndicator: React.FC<QuantityIndicatorProps> = ({
  productId,
  increasestyle,
  decreasestyle,
}) => {
  const { products, setProductState } = useProductStore();

  const productState = products[productId];

  const increaseQuantity = () => {
    // Atualize a quantidade do produto no estado do Zustand
    setProductState(productId, {
      ...productState,
      quantity: productState.quantity + 1,
    });
  };

  const decreaseQuantity = () => {
    // Atualize a quantidade do produto no estado do Zustand
    if (productState.quantity > 0) {
      setProductState(productId, {
        ...productState,
        quantity: productState.quantity - 1,
      });
    }
  };

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "gray",
    height: "100%",
  },
});
