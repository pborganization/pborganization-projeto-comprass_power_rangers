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
import { useNavigation } from "@react-navigation/native";
import { useAmountStore } from "../contexts/useAmountStore";

export const CartScreen = () => {
  const { products } = useProductStore();
  const [cart, setCart] = useState<ProductType[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const setAmount = useAmountStore((state) => state.setAmount);

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
        })
      );
      const filteredCart = cartData.filter((item) => item !== null);
      setCart(filteredCart);
      const newAmount = calculateAmount(filteredCart);
      setTotalAmount(newAmount);
      setAmount(newAmount);
    }

    fetchCardProducts;
  }, [products]);

  const calculateAmount = (items: ProductType[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const handleAmount = () => {
    const navigation = useNavigation();
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

      {cart.length === 0 && <EmptyCard />}

      <View style={styles.details}>
        <TotalAmount>{totalAmount}</TotalAmount>
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
