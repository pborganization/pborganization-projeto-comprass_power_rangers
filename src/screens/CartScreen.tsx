import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { CartProductCard } from "../components/Cart/CartProductCard";
import { EmptyCard } from "../components/Cart/EmptyCart";
import { Colors } from "../../assets/styles/Colors";
import { Button } from "../components/Buttons/Button";
import { TotalAmount } from "../components/Cart/TotalAmount";

export const CartScreen = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Pullover",
      price: 45.25,
      image: "../../../assets/images/image.png"
    },
    {
      id: 1,
      title: "Shirt",
      price: 25.50,
      image: "../../../assets/images/image.png"
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cart.map((item) => {
        return <CartProductCard price={item.price} title={item.title} />;
      })}
      {cart.length === 0 && <EmptyCard />}

      <View style={styles.details}>
        <TotalAmount>25,00</TotalAmount>
        <Button onPress={() => {}}>BUY</Button>
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
    position: "absolute",
    bottom: 25,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
