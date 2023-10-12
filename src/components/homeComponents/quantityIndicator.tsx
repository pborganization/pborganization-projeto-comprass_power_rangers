import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IncreaseButton } from "./increaseButton";
import { DecreaseButton } from "./decreaseButton";

export const QuantityIndicator = () => {
  const [quant, setQuant] = useState(0);

  const increaseQuantity = () => {
    setQuant(quant + 1);
  };

  const decreaseQuantity = () => {
    if (quant > 0) {
      setQuant(quant - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <DecreaseButton onPress={decreaseQuantity} radius={18} />
      </View>
      <View style={styles.numberContainer}>
        <Text>{quant}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IncreaseButton onPress={increaseQuantity} radius={18} />
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
  },
});
