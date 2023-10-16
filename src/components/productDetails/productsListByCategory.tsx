import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { fetchProductsForCategory } from "../../services/fakeStoreAPI";
import { Products } from "./products";
import { ProductType } from "../../contexts/productType";

interface ProductListProps {
  categoryId: number;
  currentProductId: number;
}

export const ProductListByCategory: React.FC<ProductListProps> = ({
  categoryId,
  currentProductId,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1); // Começamos com a página 1
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Define a quantidade de itens a serem buscados por página
    const limit = 10;

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const productsData = await fetchProductsForCategory(
          categoryId,
          (page - 1) * limit, // Calcula o offset com base na página
          limit
        );
        // Filter out the product with the same ID as the current product
        const filteredProducts = productsData.filter(
          (product: any) => product.id !== currentProductId
        );
        setProducts((prevProducts) => [...prevProducts, ...filteredProducts]);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, currentProductId, page]);

  const handleLoadMore = () => {
    // Carrega a próxima página quando o usuário chega ao final da lista
    setPage(page + 1);
  };

  return (
    <View style={styles.productList}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1} // Define o limite de quantos por cento do final para disparar a ação
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="small" color="gray" /> : null
        }
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
