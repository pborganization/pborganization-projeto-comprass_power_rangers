import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fetchProductsForCategory } from "../../services/fakeStoreAPI";
import { Products } from "./Products";
import { ProductType } from "../../interfaces/productType";

interface ProductListProps {
  categoryId: number;
}

export const ProductList: React.FC<ProductListProps> = ({ categoryId }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchProductsForCategory(categoryId);
        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

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
  },
});
