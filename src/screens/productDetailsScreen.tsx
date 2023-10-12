import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { fetchProductById } from "../services/fakeStoreAPI";
import { ProductType } from "../interfaces/productType";
import { QuantityIndicator } from "../components/homeComponents/quantityIndicator";
import { StatusBar } from "expo-status-bar";

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
          <View style={styles.containerquanty}>
            <QuantityIndicator
              increasestyle={styles.increasebutton}
              decreasestyle={styles.decreasebutton}
            />
          </View>
          <View>
            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.textButton}>Shipping Info</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.containerButton}>
              <Text style={styles.textButton}>Suport</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.loadingContainer}>
          <Image
            source={require("../../assets/icons/loading.gif")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      )}
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerquanty: {
    borderRadius: 8,
    width: 150,
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
    height: "50%",
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  increasebutton: {
    borderTopRightRadius: 16,
  },
  decreasebutton: {
    borderTopLeftRadius: 16,
  },
  containerButton: {
    height: 56,
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  textButton: {
    marginLeft: 16,
    fontSize: 16,
  },
});
