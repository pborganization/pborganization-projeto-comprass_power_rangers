import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchCategories } from "../../services/fakeStoreAPI";
import { ProductList } from "./productList";

interface Category {
  id: number;
  name: string;
}

export const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {categories.map((category, index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <ProductList categoryId={category.id} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 32,
    marginLeft: 16,
    marginRight: 16,
    color: "black",
    textTransform: "capitalize",
  },
});
