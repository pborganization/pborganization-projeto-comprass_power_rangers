import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ProductType } from "../../interfaces/productType";

interface ProductProps {
  product: ProductType;
}

export const Products: React.FC<ProductProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    width: 150,
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
});
