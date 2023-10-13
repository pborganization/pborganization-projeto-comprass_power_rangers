import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fetchProductsForCategory } from "../../services/fakeStoreAPI";
import { Products } from "./products";
import { ProductType } from "../../interfaces/productType";

interface ProductListProps {
  categoryId: number;
  currentProductId: number; // Add this prop to receive the current product's ID
}

export const ProductList: React.FC<ProductListProps> = ({
  categoryId,
  currentProductId,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchProductsForCategory(categoryId);
        // Filter out the product with the same ID as the current product
        const filteredProducts = productsData.filter(
          (product) => product.id !== currentProductId
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [categoryId, currentProductId]);

  return (
    <View style={styles.productList}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Products product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    marginRight: 16,
  },
  productTitle: {
    fontSize: 16,
    color: "gray",
  },
  productList: {
    marginLeft: 16,
    marginRight: 16,
  },
});
