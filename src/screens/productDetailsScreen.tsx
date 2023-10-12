import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { fetchProductById } from "../services/fakeStoreAPI";
import { ProductType } from "../interfaces/productType";
import { QuantityIndicator } from "../components/homeComponents/quantityIndicator";

interface RouteParams {
  productId: number;
}

export const ProductDetailsScreen = () => {
  const route = useRoute();
  const { productId } = route.params as RouteParams;

  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const productData = await fetchProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      }
    };

    loadProduct();
  }, [productId]);

  return (
    <View style={styles.container}>
      {product ? (
        <>
          <Image source={{ uri: product.images[0] }} style={styles.image} />
          <View style={styles.containerinfo}>
            <View>
              <Text style={styles.name}>{product.title}</Text>
              <Text style={styles.category}>{product.category.name}</Text>
            </View>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          </View>
          <View style={styles.containerdesc}>
            <Text>{product.description}</Text>
          </View>
          <QuantityIndicator />
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  containerdesc: {
    marginTop: 40,
    marginLeft: 16,
    marginRight: 16,
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 413,
    resizeMode: "cover",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  category: {
    fontSize: 11,
    color: "gray",
  },
  price: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: "bold",
  },
});
