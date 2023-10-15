import { View, StyleSheet, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { CartProductCard } from "../components/Cart/CartProductCard";
import { EmptyCard } from "../components/Cart/EmptyCart";
import { Colors } from "../../assets/styles/Colors";
import { Button } from "../components/Buttons/Button";
import { TotalAmount } from "../components/Cart/TotalAmount";
import { useProductStore } from "../components/homeComponents/Products";
import { ProductType } from "../contexts/productType";
import { fetchProductById } from "../services/fakeStoreAPI";


export const CartScreen = () => {
  const { products } = useProductStore();
  const [cart, setCart] = useState<ProductType[]>([]);


  useEffect(() => {
    async function fetchCardProducts() {
      const cart = await Promise.all(
        Object.values(products).map(async(productId) => {
          const productData =  await fetchProductById(productId);
          if(productData) {
            return {
              ...productData, quantity: productId.quantity,
            }
          }
          return null
        })
      )
      const filteredCart = cart.filter((item) => item !== null);
      setCart(filteredCart);
    }

  fetchCardProducts}, [products])
    
  const calculateAmout = () => {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartProductCard product={item} />
        )}
        ListEmptyComponent={<EmptyCard />}
      />

      {cart.length === 0 && <EmptyCard />}

      <View style={styles.details}>
        <TotalAmount>{}</TotalAmount>
        <Button onPress={calculateAmout}>BUY</Button>
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
