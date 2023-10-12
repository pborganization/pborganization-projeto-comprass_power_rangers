import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ProductType } from "../../interfaces/productType";
import { useNavigation } from "@react-navigation/native";
import { QuantityIndicator } from "./quantityIndicator";

interface ProductProps {
  product: ProductType;
}

type ProductDetailsParams = {
  productId: number;
};

export const Products: React.FC<ProductProps> = ({ product }) => {
  const navigation = useNavigation();

  const handleProductPress = () => {
    const params: ProductDetailsParams = { productId: product.id };
    // @ts-ignore
    navigation.navigate("ProductDetailsScreen", params);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerquanty}>
        <QuantityIndicator
          increasestyle={styles.increasebutton}
          decreasestyle={styles.decreasebutton}
        />
      </View>
      <TouchableOpacity onPress={handleProductPress}>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerquanty: {
    borderRadius: 8,
    width: 150,
  },
  container: {
    borderRadius: 8,
    width: 150,
    marginLeft: 16,
    marginTop: 16,
  },
  image: {
    width: 148,
    height: 184,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  description: {
    fontSize: 10,
  },
  increasebutton: {
    borderTopRightRadius: 16,
  },
  decreasebutton: {
    borderTopLeftRadius: 16,
  },
});
